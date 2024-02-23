import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Input, Card, Empty, Popconfirm, Form, Spin} from 'antd';
import DefaultSelect from "../../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultSearch from "../../../../../../components/shared-components/hotel/Search/DefaultSearch";
import SettingMasterHotelTable from "./SettingMasterHotelTable";
import styled from 'styled-components';
import MasterService from "../../../../../../services/Master/MasterService";
import {LoadingOutlined} from "@ant-design/icons";
import {VENDOR_FILTER_OPTIONS} from "../../../../../../constants/VendorConstant";
const { Text } = Typography;
const SettingMasterHotel = (props) => {
    const [pagination, setPagination] = useState(null);
    const [masterHotel, setMasterHotel] = useState([]);
    const [isMapped, setIsMapped] = useState(null);
    const [isSale, setIsSale] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filterValue, setFilterValue] = useState('HOTEL_NAME');
    const [filterOptions, setFilterOptions] = useState([
        { label: '마스터 호텔명', value: 'HOTEL_NAME' },
        { label: '마스터 호텔 코드', value: 'HOTEL_CODE' },
    ]);
    const [mappedOptions, setMappedOptions] = useState([
        { label: '== 선택 ==', value: null },
        { label: '매핑', value: 'Y' },
        { label: '미매핑', value: 'N' },
    ])
    const [saleOptions, setSaleOptions] = useState([
        { label: '== 선택 ==', value: null },
        { label: '판매', value: 'Y' },
        { label: '미판매', value: 'N' },
    ])
    const [params, setParams] = useState({
        page: 1,
        pageSize: 6,
    });

    const getFetch = async (params) => {
        const { success, masterHotels, pagination } = await getMasterHotel(params)

        if (success) {
            setMasterHotel(masterHotels)
            setPagination(pagination)
        }
    }

    const onSearch = (value, _e, info) => {
        let set_params = {
            page: 1,
            pageSize: params.pageSize,
        };

        if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_CODE) {
            set_params = { ...set_params, masterHotelCode: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_NAME) {
            set_params = { ...set_params, masterHotelName: value }
        }

        if (isMapped) set_params = { ...set_params, isMapped: isMapped === 'Y' };
        if (isSale) set_params = { ...set_params, isSale: isSale === 'Y' };
        if (props.selectedCountryCode) set_params = { ...set_params, countryCode: props.selectedCountryCode };
        if (props.selectedCityCode) set_params = { ...set_params, cityCode: props.selectedCityCode };

        props.setSelectedMasterHotelKey([])
        setParams(set_params)
    }

    const onChangePage = (nPage, nPageSize) => {
        if (params.page !== nPage) setParams(params => ({...params, page: nPage}))
        if (params.pageSize !== nPageSize) setParams(params => ({...params, pageSize: nPageSize}));
    }

    const getMasterHotel = async (params) => {
        return await MasterService.findHotelSetting(params)
    }

    useEffect(() => {
        setLoading(true)
        let _params = {...params}

        Promise.allSettled([getFetch(_params)]).then(() => setLoading(false))
    }, [params])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row gutter={[8, 0]}>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                <Form.Item style={{ marginBottom: '0.325rem' }}>
                                    <Text>도시 선택</Text>
                                    <DefaultSelect
                                        width={100}
                                        value={props.selectedCityCode}
                                        setSelectedKey={props.setSelectedCityCode}
                                        options={props.cityOptions}
                                        placeholder={`== 도시 선택 ==`}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>

                                <Form.Item style={{ marginBottom: '0.325rem' }}>
                                    <Text>맵핑 유무</Text>
                                    <DefaultSelect
                                        width={100}
                                        options={mappedOptions}
                                        setSelectedKey={setIsMapped}
                                        value={isMapped}
                                        placeholder={`== 전체 ==`}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>

                                <Form.Item style={{ marginBottom: '0.325rem' }}>
                                    <Text>판매 유무</Text>
                                    <DefaultSelect
                                        width={100}
                                        options={saleOptions}
                                        setSelectedKey={setIsSale}
                                        value={isSale}
                                        placeholder={`== 전체 ==`}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 0]}>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                <DefaultSelect
                                    width={100}
                                    options={filterOptions}
                                    value={filterValue}
                                    setSelectedKey={setFilterValue}
                                    placeholder={'== 마스터 호텔 코드 =='}
                                />
                            </Col>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                                <DefaultSearch
                                    placeholder="마스터 호텔 정보를 검색해주세요."
                                    style={{
                                        width: `100%`,
                                    }}
                                    onSearch={onSearch}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} style={{ marginTop: '10px' }}>
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
                            <SettingMasterHotelTable
                                data={masterHotel}
                                setData={setMasterHotel}
                                page={params.page}
                                pageSize={params.pageSize}
                                onChange={onChangePage}
                                pagination={pagination}
                                selectedMasterHotelKey={props.selectedMasterHotelKey}
                                setSelectedMasterHotelKey={props.setSelectedMasterHotelKey}
                            />
                        </Spin>
                    </Col>
                </Row>
            </Col>
        </>
    )
}


export default SettingMasterHotel
