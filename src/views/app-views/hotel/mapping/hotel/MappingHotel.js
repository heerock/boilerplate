import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Divider, Form } from 'antd';
import styled from 'styled-components';
import VendorHotel from './VendorHotel';
import MasterHotel from './MasterHotel';
import DefaultSelect from '../../../../../components/shared-components/hotel/Select/DefaultSelect';

const { Text } = Typography;

const MappingHotel = (props) => {
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
                    <Row>
                        <h4>마스터 호텔 검색 조건</h4>
                    </Row>
                    <Row>
                        <Form.Item style={{ marginBottom: '10px' }}>
                            <Space align={`center`}>
                                공급처 호텔과의 반경거리
                                <StyleRadioButton
                                    options={distanceOptions}
                                    onChange={onChange}
                                    value={distance}
                                    optionType={`button`}
                                    buttonStyle={`solid`}
                                />
                            </Space>
                        </Form.Item>
                    </Row>
                    <Row>
                        <Space wrap>
                            <Text>호텔명 단어 일치</Text>    
                            <DefaultSelect
                              placeholder={'== 선택 =='}
                            />
                        </Space>
                    </Row>
                    <Divider />
                    <Row gutter={[0, 0]}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <VendorHotel setSelectedVendorHotelKey={setSelectedVendorHotelKey}/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <MasterHotel selectedVendorHotelKey={selectedVendorHotelKey}/>
                        </Col>
                    </Row>
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

export default MappingHotel
