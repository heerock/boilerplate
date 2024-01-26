import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Input, Checkbox, Form } from 'antd';
import styled from 'styled-components';
import VendorHotelTable from './VendorHotelTable';
import DefaultSelect from "../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultSearch from "../../../../../components/shared-components/hotel/Search/DefaultSearch";
import DefaultCheckbox from "../../../../../components/shared-components/hotel/Checkbox/DefaultCheckbox";
import { useSelector } from 'react-redux';
import VendorService from "../../../../../services/Vendor/VendorService";
import {VENDOR_FILTER_OPTIONS} from "../../../../../constants/VendorConstant";

const { Text } = Typography;
const { Search } = Input;
const defaultData = [
    { key: '1', hotelCode: 'HK12345678', channel: 'HIKARI', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSelfSale: true},
    { key: '2', hotelCode: 'HK12345679', channel: 'HIKARI', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '3', hotelCode: 'HK12345680', channel: 'HIKARI', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
]


const VendorHotel = (props) => {
    const { mappingCountries, mappingCountryCities } = useSelector(state => state.location);
    const [vendor, setVendor] = useState(props.vendor);
    const [countryKey, setCountryKey] = useState(null);
    const [isNotMapped, setIsNotMapped] = useState(false)
    const [cityKey, setCityKey] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [filterValue, setFilterValue] = useState('HOTEL_CODE');
    const [filterOptions, setFilterOptions] = useState([
        { label: '공급처 호텔 코드', value: 'HOTEL_CODE' },
        { label: '공급처 호텔명', value: 'HOTEL_NAME' },
        { label: '공급처 도시명', value: 'HOTEL_CITY_NAME' },
    ]);

    const [hotels, setHotels] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5)
    const [params, setParams] = useState({
        page: 1,
        pageSize: 4,
        supplierSystem: vendor,
    });
    const onSearch = (value, _e, info) => {
        let set_params = {
            page: 1,
            pageSize: params.pageSize,
        };

        if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_CODE) {
            set_params = { ...set_params, supplierHotelCode: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_NAME) {
            set_params = { ...set_params, supplierHotelName: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_CITY_NAME) {
            set_params = { ...set_params, supplierCityName: value }
        }

        if (isNotMapped) set_params = { ...set_params, isNotMapped };
        if (vendor) set_params = { ...set_params, supplierSystem: vendor};
        if (cityKey) set_params = { ...set_params, cityCode: cityKey };
        if (countryKey) set_params = { ...set_params, countryCode: countryKey };

        props.setSelectedVendorHotelKey([]);
        setParams(set_params)
    }

    useEffect(() => {
        getFetch(params)
    }, [params])

    const onChangeMapping = (value) => {
      setIsNotMapped(value.target.checked)
    }

    const onChangePage = (nPage, nPageSize) => {
      if (params.page !== nPage) setParams(params => ({...params, page: nPage}))
      if (params.pageSize !== nPageSize) setParams(params => ({...params, pageSize: nPageSize}))
    }

    const getFetch = (params) => {
        getVendorHotel(params)
    }

    const getVendorHotel = async (params) => {
        const response = await VendorService.findHotel(params);
        setHotels(response.supplierHotels);
        setPagination(response.pagination)
    }

    useEffect(() => {
        setCityKey(null)
        if (countryKey) {
            const country = props.countries.find((country) => country.countryCode === countryKey)
            if (country) {
                setCityOptions([
                    { label: '== 도시 선택 ==', value: null },
                    ...country.cities.map((city) => {
                        return {
                            label: city.name,
                            value: city.cityCode
                        }
                    })
                    .sort((a, b) => a.label.localeCompare(b.label))
                ])
            }
        }

    }, [countryKey])

    useEffect(() => {
        setVendor(props.vendor)
    }, [props.vendor])

    useEffect(() => {
        // console.log('pagination : ', pagination)
    }, [pagination])

	return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[8, 8]} style={{ padding: '0 0.3rem' }}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <DefaultSelect
                            width={100}
                            options={props.countriesOption}
                            value={countryKey}
                            setSelectedKey={setCountryKey}
                            placeholder={'== 국가 선택 =='}
                        />
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <DefaultSelect
                            style={{ width: '30%' }}
                            options={cityOptions}
                            value={cityKey}
                            setSelectedKey={setCityKey}
                            placeholder={'== 도시 선택 =='}
                        />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <DefaultSelect
                            width={100}
                            options={filterOptions}
                            value={filterValue}
                            setSelectedKey={setFilterValue}
                            placeholder={'공급업체 호텔코드'}
                        />
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <DefaultSearch
                            placeholder="공급처 호텔 정보를 검색해주세요."
                            onSearch={onSearch}
                            style={{
                                width: `100%`,
                            }}
                        />
                    </Col>
                </Row>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Form.Item style={{ textAlign: 'left' }}>
                        <DefaultCheckbox
                            onChange={onChangeMapping}
                            text={'매핑하지 않은 호텔만 보기'}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ padding: '0 0.3rem' }}>
                    <VendorHotelTable
                        setSelectedVendorHotelKey={props.setSelectedVendorHotelKey}
                        data={hotels}
                        page={params.page}
                        pageSize={params.pageSize}
                        onChange={onChangePage}
                        selectedVendorHotelKey={props.selectedVendorHotelKey}
                        pagination={pagination}
                    />
                </Col>
            </Col>
        </>
	)
}

export default VendorHotel
