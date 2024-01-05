import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Divider, Form } from 'antd';
import styled from 'styled-components';
import DefaultSelect from '../../../../../../components/shared-components/hotel/Select/DefaultSelect';
import DefaultButton from '../../../../../../components/shared-components/hotel/Button/DefaultButton';
import DefaultSearch from '../../../../../../components/shared-components/hotel/Search/DefaultSearch';
import SettingMasterHotelTable from './SettingMasterHotelTable';
const { Text } = Typography;
const defaultData = [
    { key: '1', masterHotelCode: 'EX12345678', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSale: 'Y'},
    { key: '2', masterHotelCode: 'EX12345679', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSale: 'Y'},
    { key: '3', masterHotelCode: 'EX12345680', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSale: 'Y'},
    { key: '4', masterHotelCode: 'EX12345681', vendorHotelCode: 'HK12345679', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSale: 'N'},
];

const MappingSetting = (props) => {
    const [data, setData] = useState([]);
    const [selectedVendorHotelKey, setSelectedVendorHotelKey] = useState(null);
    const [distanceOptions, setDistanceOptions] = useState([
        {label: '1km 이내', value: 1},
        {label: '2km 이내', value: 2},
        {label: '3km 이내', value: 3},
        {label: '4km 이내', value: 4},
        {label: '5km 이내', value: 5},
    ])
    const [distance, setDistance] = useState(1);

    const onChange = ({ target: { value }}) => {
        setDistance(value);
    }

    useEffect(() => {
        console.log('selectedVendorHotelKey : ', selectedVendorHotelKey)
    }, [selectedVendorHotelKey])

    return (
        <>
            <Row style={{width: `100%`}} gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <DefaultSelect
                       width={20}
                       placeholder={`=== 국가 선택 ===`}
                    />
                    <DefaultButton style={{ marginLeft: '5px' }} text={'검색하기'}/>

                    <Divider />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Row gutter={[8, 0]}>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                        <Form.Item style={{ marginBottom: '0.325rem' }}>
                                            <Text>도시 선택</Text>
                                            <DefaultSelect
                                                width={100}
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
                                <SettingMasterHotelTable data={defaultData}/>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>

                    </Col>

                </Col>
            </Row>
        </>
    )
}

export const StyleRadioButton = styled(Radio.Group)`
    margin-left: 10px;
    .ant-radio-button-wrapper {
        height: 2rem !important;
        padding: 0px 0.55rem !important;
        line-height: 1.975rem !important;
    }
`

export default MappingSetting
