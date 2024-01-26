import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Divider, Form } from 'antd';
import styled from 'styled-components';
import DefaultSelect from '../../../../../../components/shared-components/hotel/Select/DefaultSelect';
import DefaultButton from '../../../../../../components/shared-components/hotel/Button/DefaultButton';
import DefaultSearch from '../../../../../../components/shared-components/hotel/Search/DefaultSearch';
import SettingMasterHotelTable from './SettingMasterHotelTable';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import SettingVendorHotelTable from "./SettingVendorHotelTable";
import DistanceRadio from "../../../../../../components/shared-components/hotel/Radio/DistanceRadio";
import {useSelector} from "react-redux";
const { Text } = Typography;
const defaultMasterData = [
    {
        key: '11eebb1e-300e-98d6-850e-95b5d5006522',
        id: "11eebb1e-300e-98d6-850e-95b5d5006522",
        supplierSystem: "EXPEDIA",
        vendors: ['TRIPBTOZ', 'OHMYHOTEL','OHMYHOTEL','OHMYHOTEL','OHMYHOTEL'],
        code: "HT00000001",
        name: "Hanwha Resort Jirisan",
        address: "464, Hwaeomsa-ro, Masan-myeon 57616 Gurye ´KR´",
        phone: "8227295936",
        fax: "8227293893",
        rating: 3.50,
        country: {
            "code": "KR",
            "name": "대한민국"
        },
        city: {
            "code": "KRGRE",
            "name": "구례군",
            "englishName": "Gurye"
        },
        updatedId: 'heerock@teamo2.kr',
        updatedAt: '2024-01-30 10:00',
        isMapping: 'Y',
        isSale: 'Y'
    },

    // { key: 'EX12345678', vendors: ['TRIPBTOZ', 'OHMYHOTEL','OHMYHOTEL','OHMYHOTEL','OHMYHOTEL'], hotelCode: 'EX12345678', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'Y', isSale: 'Y'},
    // { key: 'EX12345679', vendors: ['EXPEDIA'], hotelCode: 'EX12345679', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'Y', isSale: 'Y'},
    // { key: 'EX12345680', hotelCode: 'EX12345680', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'N', isSale: 'Y'},
    // { key: 'EX12345681', hotelCode: 'EX12345681', vendorHotelCode: 'HK12345679', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isMapping: 'N', isSale: 'N'},
];

const defaultVendorData = [
    {
        key: '11eebb1e-300e-98d6-850e-95b5d5006522',
        id: "11eebb1e-300e-98d6-850e-95b5d5006522",
        supplierSystem: "HIKARI_TOUR",
        code: "HT00000001",
        name: "Hanwha Resort Jirisan",
        address: "464, Hwaeomsa-ro, Masan-myeon 57616 Gurye ´KR´",
        phone: "8227295936",
        fax: "8227293893",
        rating: 3.00,
        country: {
            "code": "KR",
            "name": "대한민국"
        },
        city: {
            "code": "KRGRE",
            "name": "구례군",
            "englishName": "Gurye"
        },
        isMapping: 'Y',
        isSale: 'Y'
    },
];

const MappingSetting = (props) => {
    const { mappingCountries, mappingCountriesOption } = useSelector(state => state.location);
    const [masterData, setMasterData] = useState(defaultMasterData);
    const [vendorData, setVendorData] = useState(defaultVendorData);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [selectedCityCode, setSelectedCityCode] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [selectedVendorHotelKey, setSelectedVendorHotelKey] = useState([]);
    const [distanceOptions, setDistanceOptions] = useState([
        {label: '1km 이내', value: 1},
        {label: '2km 이내', value: 2},
        {label: '3km 이내', value: 3},
        {label: '4km 이내', value: 4},
        {label: '5km 이내', value: 5},
        {label: '5km 이상', value: 0},
    ])
    const [distance, setDistance] = useState(1);

    const onChange = ({ target: { value }}) => {
        setDistance(value);
    }

    useEffect(() => {
        console.log('selectedVendorHotelKey : ', selectedVendorHotelKey)
    }, [selectedVendorHotelKey])

    useEffect(() => {
        setSelectedCityCode(null);
    }, [selectedCountryCode])

    useEffect(() => {
        if (selectedCountryCode) {
            const country = mappingCountries.find((country) => country.countryCode === selectedCountryCode)
            if (country) {
                setCityOptions(
                    country.cities.map((city) => {
                        return {
                            label: city.name,
                            value: city.cityCode
                        }
                    })
                )
            }
        }

    }, [selectedCountryCode])

    return (
        <>
            <Row style={{width: `100%`}} gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row gutter={[0, 16]}>
                        <DefaultSelect
                            width={20}
                            setSelectedKey={setSelectedCountryCode}
                            value={selectedCountryCode}
                            placeholder={`=== 국가 선택 ===`}
                            options={mappingCountriesOption}
                        />
                        {/*<DefaultButton style={{ marginLeft: '5px' }} text={'검색하기'}/>*/}
                    </Row>
                    <Divider />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display: 'flex'}}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Row gutter={[8, 0]}>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item style={{ marginBottom: '0.325rem' }}>
                                            <Text>도시 선택</Text>
                                            <DefaultSelect
                                                width={100}
                                                setSelectedKey={setSelectedCityCode}
                                                value={selectedCityCode}
                                                options={cityOptions}
                                                placeholder={`== 도시 선택 ==`}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>

                                        <Form.Item style={{ marginBottom: '0.325rem' }}>
                                            <Text>맵핑 유무</Text>
                                            <DefaultSelect
                                                width={100}
                                                placeholder={`== 전체 ==`}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>

                                        <Form.Item style={{ marginBottom: '0.325rem' }}>
                                            <Text>판매 유무</Text>
                                            <DefaultSelect
                                                width={100}
                                                placeholder={`== 전체 ==`}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 0]}>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                        <DefaultSelect
                                            width={100}
                                            placeholder={'== 마스터 호텔 코드 =='}
                                        />
                                    </Col>
                                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                                        <DefaultSearch
                                            placeholder="마스터 호텔 정보를 검색해주세요."
                                            style={{
                                                width: `100%`,
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{ marginTop: '10px' }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <SettingMasterHotelTable data={masterData} setData={setMasterData} />
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                <Form.Item style={{ marginBottom: '0.325rem' }}>
                                    <DefaultSelect
                                        width={100}
                                        placeholder={`== 공급처 선택 선택 ==`}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item style={{ textAlign: 'left', marginBottom: '0.325rem' }}>
                                    <DefaultCheckbox
                                        onChange={onChange}
                                        text={'판매 중인 호텔만 보기'}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 0]}>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                <DefaultSelect
                                    width={100}
                                    placeholder={'공급업체 호텔코드'}
                                />
                            </Col>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                                <DefaultSearch
                                    placeholder="공급처 호텔 정보를 검색해주세요."
                                    // onSearch={}
                                    style={{
                                        width: `100%`,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{ marginTop: '10px' }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <SettingVendorHotelTable data={vendorData} setData={setVendorData}/>
                            </Col>
                        </Row>
                    </Col>

                </Col>
            </Row>
        </>
    )
}


export default MappingSetting
