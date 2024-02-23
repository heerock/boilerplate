import React, { useState, useEffect } from 'react';
import { Col, Input, Row, Space, Typography, Spin } from 'antd';
import styled from 'styled-components';

import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import DefaultTable from 'components/shared-components/hotel/Table/DefaultTable';
import DefaultButton from 'components/shared-components/hotel/Button/DefaultButton';
import HotelHistoryModal from '../../mapping/hotel/modal/HotelHistoryModal';
import HotelDetailModal from '../../mapping/hotel/modal/HotelDetailModal';
import HotelNumberColumn from "../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn";
import MarkupHotelTable from "./MarkupHotelTable";
import { useSelector, useDispatch } from "react-redux";
import LocationService from "../../../../../services/Location/LocationService";
import {mappingCountriesAction, mappingCountriesOptionAction} from "../../../../../redux/actions/Location";
import {LoadingOutlined} from "@ant-design/icons";
import VendorService from "../../../../../services/Vendor/VendorService";
import {VENDOR_FILTER_OPTIONS} from "../../../../../constants/VendorConstant";
import HotelVendorSystemMarkupModal from "../../mapping/hotel/modal/HotelVendorSystemMarkupModal";

const { Text } = Typography;

const MarkupList = () => {
    const { mappingCountries, mappingCountriesOption } = useSelector(state => state.location);
    const [vendorSystem, setVendorSystem] = useState('HIKARI_TOUR');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [isVendorSystemMarkupModalOpen, setIsVendorSystemMarkupModalOpen] = useState(false);
    const [vendorSystems, setVendorSystems] = useState(null);
    const [selectedVendorSystem, setSelectedVendorSystem] = useState(null);
    const [selectedHotelKey, setSelectedHotelKey] = useState(null);
    const [countryKey, setCountryKey] = useState(null);
    const [cityKey, setCityKey] = useState(null);
    const [vendorHotels, setVendorHotels] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [filterValue, setFilterValue] = useState('HOTEL_NAME');
    const [filterOptions, setFilterOptions] = useState([
        { label: '공급처 호텔명', value: 'HOTEL_NAME' },
        { label: '공급처 호텔 코드', value: 'HOTEL_CODE' },
    ]);
    const [params, setParams] = useState({
        page: 1,
        pageSize: 10,
    });
    const dispatch = useDispatch();

    const historyModalOnClick = (key) => {
        setSelectedHotelKey(key);
        setIsHistoryModalOpen(!isHistoryModalOpen)
    }

    const detailViewOnClick = (key) => {
        setSelectedHotelKey(key);
        setIsModalOpen(!isModalOpen);
    }

    const onClickRefresh = async (record, rate) => {
        const { success } = await VendorService.updatedMarkupVendorSystem({ record, rate })

        if (success) {
          getMarkupVendorSystemRefresh()
        }
    }

    const getMarkupVendorSystemRefresh = async () => {
        const { success, supplierMarkups } = await getMarkupVendorSystem();

        if (success) {
            setVendorSystems(supplierMarkups);
        }
    }

    const getFetch = async (params) => {
        if (!mappingCountries || mappingCountries.length === 0) {
            await getCountry(vendorSystem)
        }

        if (!vendorSystems) {
            const { success, supplierMarkups } = await getMarkupVendorSystem();

            if (success) {
                setVendorSystems(supplierMarkups);
            }
        }

        const { success, pagination, supplierHotels } = await getVendorMarkupHotels(params)

        if (success) {
            setVendorHotels(supplierHotels)
            setPagination(pagination)
        }
    }

    const getMarkupVendorSystem = async () => {
        return await VendorService.getMarkupVendorSystems()
    }

    const getVendorMarkupHotels = async (params) => {
        return await VendorService.getMarkupHotels(params)
    }

    const getCountry = async (key) => {
        const { supplierCountries } = await LocationService.country(key)

        if (supplierCountries) {
            dispatch(mappingCountriesAction(supplierCountries))
            dispatch(mappingCountriesOptionAction([
                { label: '== 국가 선택==', value: null },
                ...supplierCountries.map((country) => {
                    return { label: country.name, value: country.countryCode }
                })
                    .sort((a, b) => a.label.localeCompare(b.label))
            ]))

            return true
        }
        return false
    }

    const onClickVendorSystemMarkup = () => {
        setIsVendorSystemMarkupModalOpen(!isVendorSystemMarkupModalOpen)
    }

    const onChangePage = (nPage, nPageSize) => {
        if (params.page !== nPage) setParams(params => ({...params, page: nPage}))
        if (params.pageSize !== nPageSize) setParams(params => ({...params, pageSize: nPageSize}));
    }

    const onSearch = (value, _e, info) => {
        let set_params = {
            page: 1,
            pageSize: params.pageSize,
        };

        if (vendorSystem) {
            set_params = { ...set_params, supplierSystem: vendorSystem }
        }

        if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_CODE) {
            set_params = { ...set_params, supplierHotelCode: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_NAME) {
            set_params = { ...set_params, supplierHotelName: value }
        }

        if (countryKey) set_params = { ...set_params, countryCode: countryKey };
        if (cityKey) set_params = { ...set_params, cityCode: cityKey };

        setParams(set_params)
    }

    useEffect(() => {
        if (vendorSystem && vendorSystems) {
            setSelectedVendorSystem(vendorSystems.find((vendor) => vendor.supplierSystem === vendorSystem));
        }
    }, [vendorSystem, vendorSystems])

    useEffect(() => {
        setLoading(true)
        let _params = {...params}

        if (vendorSystem) {
            _params = {
                ...params,
                supplierSystem: vendorSystem,
            }
        }

        Promise.allSettled([getFetch(_params)]).then(() => setLoading(false))
    }, [params])

	return (
		<>
            <Spin
                style={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                spinning={loading}
                tip={'로딩중..'}
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: '4rem',
                        }}
                        spin
                    />
                }
            >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row>
                            <PageHeader level={2} title={'호텔 마크업 관리'}/>
                        </Row>
                        <Row>
                            <SearchFilter
                                mappingCountriesOption={mappingCountriesOption}
                                mappingCountries={mappingCountries}
                                vendorSystem={vendorSystem}
                                setVendorSystem={setVendorSystem}
                                countryKey={countryKey}
                                setCountryKey={setCountryKey}
                                setCityOptions={setCityOptions}
                                cityOptions={cityOptions}
                                cityKey={cityKey}
                                setCityKey={setCityKey}
                                filterOptions={filterOptions}
                                filterValue={filterValue}
                                setFilterValue={setFilterValue}
                                onSearch={onSearch}
                                selectedVendorSystem={selectedVendorSystem}
                                onClick={onClickVendorSystemMarkup}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ marginTop: '1.825rem' }}>
                            <MarkupHotelTable
                                data={vendorHotels}
                                setData={setVendorHotels}
                                page={params.page}
                                pageSize={params.pageSize}
                                onChange={onChangePage}
                                pagination={pagination}
                            />
                        </Row>
                    </Col>
                </Row>
            </Spin>
            <HotelVendorSystemMarkupModal
                vendorSystems={vendorSystems}
                isModalOpen={isVendorSystemMarkupModalOpen}
                setIsModalOpen={setIsVendorSystemMarkupModalOpen}
                onClick={onClickRefresh}
            />
		</>
	)
}


export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.channel === 'HG' && '#76BEDB'};
  color: #FFF;
  width: 30%;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
`

export default MarkupList
