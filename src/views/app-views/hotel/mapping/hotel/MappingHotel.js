import React, { useState, useEffect, Suspense } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Divider, Form, Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import Loading from 'components/shared-components/Loading';
import styled from 'styled-components';
import VendorHotel from './VendorHotel';
import MasterHotel from './MasterHotel';
import DefaultSelect from '../../../../../components/shared-components/hotel/Select/DefaultSelect';
import DistanceRadio from "../../../../../components/shared-components/hotel/Radio/DistanceRadio";
import LocationService from "../../../../../services/Location/LocationService";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";
import {
    mappingCountriesAction,
    mappingCountriesOptionAction,
} from '../../../../../redux/actions/Location';
import {LoadingOutlined} from "@ant-design/icons";

const { Text } = Typography;

const MappingHotel = (props) => {
    const { mappingCountries, mappingCountriesOption } = useSelector(state => state.location);
    // const { loading } = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const [selectedVendorHotelKey, setSelectedVendorHotelKey] = useState([]);
    const [vendorCompanies, setVendorCompanies] = useState([
        {key: 'HIKARI_TOUR', label: 'HIKARI GLOBAL', value: 'HIKARI_TOUR'},
        // {key: 'HIKARI_TOUR2', label: 'HIKARI GLOBAL2', value: 'HIKARI_TOUR2'},
    ])
    const [loading, setLoading] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState('HIKARI_TOUR');
    const [countries, setCountries] = useState([]);
    const [countriesOption, setCountriesOption] = useState([]);
    const [distanceOptions, setDistanceOptions] = useState([
        {label: '1km 이내', value: 1},
        {label: '2km 이내', value: 2},
        {label: '3km 이내', value: 3},
        {label: '4km 이내', value: 4},
        {label: '5km 이내', value: 5},
    ])
    const [distance, setDistance] = useState(1);

    const getFetch = (key) => {
        setLoading(true)
        Promise.allSettled([getCountry(key)]).then(() => setLoading(false));
    }

    const onClickVendorChoice = (value) => {
        setSelectedVendor(value)
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

    useEffect(() => {
        getFetch(selectedVendor)
    }, [selectedVendor])

    const onChange = ({ target: { value }}) => {
        setDistance(value);
    }

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
                <Row style={{width: `100%`}} gutter={[16, 16]}>
                    <Col key={'MappingHotel'} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row>
                            {vendorCompanies.map((vendor) =>
                                <DefaultButton
                                    style={{
                                        background: selectedVendor === vendor.value ? '#337AB7' : '#FFF',
                                        fontSize: '1rem',
                                        height: '2rem',
                                        marginBottom: '1rem',
                                        marginRight: '0.225rem'
                                    }}
                                    color={selectedVendor === vendor.value ? '#FFF' : '#7a7878'}
                                    text={vendor.label}
                                    onClick={() => onClickVendorChoice(vendor.value)}
                                />
                            )}
                        </Row>
                        <Row>
                            <h4>마스터 호텔 검색 조건</h4>
                        </Row>
                        <Row>
                            <Form.Item style={{ marginBottom: '10px' }}>
                                <Space align={`center`}>
                                    공급처 호텔과의 반경거리
                                    <DistanceRadio
                                        options={distanceOptions}
                                        onChange={onChange}
                                        value={distance}
                                    />
                                </Space>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Space wrap>
                                <Text>호텔명 단어 일치</Text>
                                <DefaultSelect
                                  disabled={true}
                                  placeholder={'== 선택 =='}
                                />
                            </Space>
                        </Row>
                        <Divider />
                        <Row gutter={[0, 0]}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <VendorHotel
                                    vendor={selectedVendor}
                                    countriesOption={mappingCountriesOption}
                                    countries={mappingCountries}
                                    setSelectedVendorHotelKey={setSelectedVendorHotelKey}
                                    selectedVendorHotelKey={selectedVendorHotelKey}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <MasterHotel
                                    selectedVendorHotelKey={selectedVendorHotelKey}
                                    distance={distance}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Spin>
        </>
	)
}

export default MappingHotel
