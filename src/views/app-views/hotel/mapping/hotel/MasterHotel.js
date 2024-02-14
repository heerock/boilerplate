import React, {useState, useEffect, useCallback} from 'react';
import { Col, Row, Typography, Select, Checkbox, Input, Form, Spin } from 'antd';
import styled from 'styled-components';
import MasterHotelTable from './MasterHotelTable';
import DefaultSelect from "../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultCheckbox from "../../../../../components/shared-components/hotel/Checkbox/DefaultCheckbox";
import DefaultSearch from "../../../../../components/shared-components/hotel/Search/DefaultSearch";
import MappedHotel from "./MappedHotel";
import MasterService from "../../../../../services/Master/MasterService";
import {VENDOR_FILTER_OPTIONS} from "../../../../../constants/VendorConstant";
import {MASTER_FILTER_OPTIONS} from "../../../../../constants/MasterConstant";
import {LoadingOutlined} from "@ant-design/icons";

const { Text } = Typography;
const { Search } = Input;

const defaultData = [
    { key: '1', hotelCode: 'EX12345678', vendorHotelCode: ['HT00000001'], channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', mappingStatus: 'Y' },
    { key: '2', hotelCode: 'EX12345679', vendorHotelCode: ['HT00000002'], channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', mappingStatus: 'N' },
    { key: '3', hotelCode: 'EX12345680', vendorHotelCode: ['HT00000003'], channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', mappingStatus: 'N' },
    { key: '4', hotelCode: 'EX12345681', vendorHotelCode: ['HT00000001'], channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', mappingStatus: 'N' },
]

const MasterHotel = (props) => {
    const [masterHotels, setMasterHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mappedHotel, setMappedHotel] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [isNotMapped, setIsNotMapped] = useState(false)
    const [filterValue, setFilterValue] = useState(null);
    const [filterOptions, setFilterOptions] = useState([
        { label: '마스터 호텔 코드', value: 'HOTEL_CODE' },
        { label: '마스터 호텔명', value: 'HOTEL_NAME' },
    ]);
    const [params, setParams] = useState({
        page: 1,
        pageSize: 3,
    });
    const onSearch = (value, _e, info) => {
        let set_params = {
            page: 1,
            pageSize: params.pageSize,
            radius: params.radius,
        };

        if (props.selectedVendorHotelKey) {
            set_params = { ...set_params, supplierHotelId: props.selectedVendorHotelKey[0] }
        }

        if (filterValue === MASTER_FILTER_OPTIONS.HOTEL_CODE) {
            set_params = { ...set_params, masterHotelCode: value }
        } else if (filterValue === MASTER_FILTER_OPTIONS.HOTEL_NAME) {
            set_params = { ...set_params, masterHotelName: value }
        }

        if (isNotMapped) set_params = { ...set_params, isNotMapped: true };
        else set_params = { ...set_params, isNotMapped: false };

        setParams(params => ({...params, ...set_params}))
    }

    const onChangeMapping = (value) => {
        setIsNotMapped(value.target.checked)
    }

    const onClickMapping = (id, selectedVendorHotelKey, type) => {
        mappingHotel({
            supplierHotelId: selectedVendorHotelKey,
            masterHotelId: id,
        }, type)
    }

    const onChangePage = (nPage, nPageSize) => {
        if (params.page !== nPage) setParams(params => ({...params, page: nPage}))
        if (params.pageSize !== nPageSize) setParams(params => ({...params, pageSize: nPageSize}));
    }

    const getFetch = async (params) => {
        const { success, mappedMasterHotel, masterHotels, pagination } = await getMasterHotel(params);
        if (success) {
            setMasterHotels(masterHotels);
            setMappedHotel(mappedMasterHotel);
            setPagination(pagination);
        }
    }

    const mappingHotel = async (body, type) => {
        let response = null;
        if (type === 'insert') {
            response = await MasterService.insertMappingHotel(body);
        } else if (type === 'delete') {
            response = await MasterService.deleteMappingHotel(body);
        }

        if ('success' in response && response.success) {
            setParams(params => ({ ...params, page: 1 }))
        }
    }

    const getMasterHotel = async (params) => {
        return await MasterService.findMasterHotel(params);
    }

    useEffect(() => {
        if (params?.supplierHotelId) {
            setLoading(true)

            Promise.allSettled([
                getFetch({
                    ...params,
                    minSimilarityScore: props.minSimilarityScore
                })
            ]).then(() => setLoading(false))
        }
    }, [params])

    useEffect(() => {
        if(props.selectedVendorHotelKey && props.selectedVendorHotelKey.length === 1) {
            setParams(params => ({
                ...params,
                page: 1,
                supplierHotelId: props.selectedVendorHotelKey[0]
            }))
        } else {
            setMappedHotel(null)
            setMasterHotels([])
        }
    }, [props.selectedVendorHotelKey])

    useEffect(() => {
        setParams(params => ({ ...params, radius: props.distance }))
    }, [props.distance])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Form.Item style={{ marginBottom: '0.325rem' }}>
                    <DefaultCheckbox
                        onChange={onChangeMapping}
                        text={'매핑하지 않은 호텔만 보기'}
                    />
                </Form.Item>
            </Col>
            <Row gutter={[8, 16]} style={{ padding: '0 0.3rem' }}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <DefaultSelect
                        width={100}
                        options={filterOptions}
                        value={filterValue}
                        setSelectedKey={setFilterValue}
                        placeholder={`마스터 호텔코드`}
                    />
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18} style={{ padding: '0 0.3rem' }}>
                    <DefaultSearch
                        placeholder="마스터 호텔 정보를 검색해주세요."
                        onSearch={onSearch}
                        style={{
                            width: `100%`,
                        }}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Spin
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
                        <MappedHotel
                            mappedHotel={mappedHotel}
                            selectedVendorHotelKey={props.selectedVendorHotelKey}
                            onClick={onClickMapping}
                        />
                        <MasterHotelTable
                            data={masterHotels}
                            setData={setMasterHotels}
                            page={params.page}
                            pageSize={params.pageSize}
                            onClick={onClickMapping}
                            onChange={onChangePage}
                            pagination={pagination}
                            selectedVendorHotelKey={props.selectedVendorHotelKey}
                            mappedHotel={mappedHotel}
                        />
                    </Spin>
                </Col>
            </Row>
		</>
	)
}

export const StyleCheckbox = styled(Checkbox)`
    .ant-checkbox {
        top: 0.32rem !important;
    }
`

export default MasterHotel
