import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Input, Card, Empty, Popconfirm, Form, Spin} from 'antd';
import styled from 'styled-components';
import DefaultSelect from "../../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultCheckbox from "../../../../../../components/shared-components/hotel/Checkbox/DefaultCheckbox";
import DefaultSearch from "../../../../../../components/shared-components/hotel/Search/DefaultSearch";
import SettingVendorHotelTable from './SettingVendorHotelTable';
import VendorService from "../../../../../../services/Vendor/VendorService";
import {LoadingOutlined} from "@ant-design/icons";
import {VENDOR_FILTER_OPTIONS} from "../../../../../../constants/VendorConstant";
const SettingVendorHotel = (props) => {
    const [loading, setLoading] = useState(false);
    const [vendorHotels, setVendorHotels] = useState([]);
    const [isSale, setIsSale] = useState(true)
    const [filterValue, setFilterValue] = useState('HOTEL_ORIGINAL_CODE');
    const [filterOptions, setFilterOptions] = useState([
        { label: '공급처 호텔 원본 코드', value: 'HOTEL_ORIGINAL_CODE' },
        { label: '공급처 호텔 코드', value: 'HOTEL_CODE' },
        { label: '공급처 호텔명', value: 'HOTEL_NAME' },
    ]);
    const [vendorSystem, setVendorSystem] = useState(null);
    const [vendorSystemOptions, setVendorSystemOptions] = useState([
        { key: '', label: '== 공급처 선택 선택 ==', value: null },
        { key: 'HIKARI_TOUR', label: 'HIKARI GLOBAL', value: 'HIKARI_TOUR' },
    ])
    const [params, setParams] = useState({
        page: 1,
        pageSize: 6,
    });

    const onChangeIsSale = (value) => {
        setIsSale(value.target.checked)
    }

    const onSearch = (value, _e, info) => {
        let set_params = {};

        if (vendorSystem) {
            set_params = { ...set_params, sourceSystem: vendorSystem }
        }

        if (props.selectedMasterHotelKey && props.selectedMasterHotelKey.length > 0) {
            set_params = { ...set_params, masterHotelId: props.selectedMasterHotelKey[0] }
        }

        if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_CODE) {
            set_params = { ...set_params, supplierHotelCode: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_NAME) {
            set_params = { ...set_params, supplierHotelName: value }
        } else if (filterValue === VENDOR_FILTER_OPTIONS.HOTEL_ORIGINAL_CODE) {
            set_params = { ...set_params, supplierSourceSystemId: value }
        }

        set_params = { ...set_params, isSale: isSale };

        setParams(set_params)
    }

    const getFetch = async (params) => {
        const { success, supplierHotels } = await getVendorHotels(params)

        if (success) {
            setVendorHotels(supplierHotels.map((hotel) => {
                return {
                    ...hotel,
                    isMapped: true,
                }
            }));
        }
    }

    const getVendorHotels = async (params) => {
        return await VendorService.findHotelSetting(params)
    }

    useEffect(() => {
        if (params?.masterHotelId) {
            setLoading(true)
            let _params = {...params}

            Promise.allSettled([getFetch(_params)]).then(() => setLoading(false))
        }
    }, [params])

    useEffect(() => {
        if(props.selectedMasterHotelKey && props.selectedMasterHotelKey.length > 0) {
            setParams(params => ({
                ...params,
                page: 1,
                masterHotelId: props.selectedMasterHotelKey[0]
            }))
        } else {
            setVendorHotels([]);
        }

    }, [props.selectedMasterHotelKey])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <Form.Item style={{ marginBottom: '0.325rem' }}>
                            <DefaultSelect
                                width={100}
                                setSelectedKey={setVendorSystem}
                                value={vendorSystem}
                                options={vendorSystemOptions}
                                placeholder={`== 공급처 선택 선택 ==`}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Item style={{ textAlign: 'left', marginBottom: '0.325rem' }}>
                            <DefaultCheckbox
                                checked={isSale}
                                onChange={onChangeIsSale}
                                text={'판매 중인 호텔만 보기'}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <DefaultSelect
                            width={100}
                            options={filterOptions}
                            setSelectedKey={setFilterValue}
                            value={filterValue}
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
                            <SettingVendorHotelTable
                                data={vendorHotels}
                                setData={setVendorHotels}
                                selectedMasterHotelKey={props.selectedMasterHotelKey}
                            />
                        </Spin>
                    </Col>
                </Row>
            </Col>
        </>
    )
}


export default SettingVendorHotel
