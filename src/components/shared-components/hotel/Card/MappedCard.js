import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Select, Checkbox, Input, Form, Card} from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from "../Div/AffiliatesBadgeDiv";
import DefaultButton from "../Button/DefaultButton";
import {SelectOutlined} from "@ant-design/icons";
import HotelInformationColumn from "../HotelColumns/HotelInformationColumn";

const { Text } = Typography;
const MappedCard = (props) => {
    const [mappedHotel, setMappedHotel] = useState(null);

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <StyleMappedCard
                    style={{ marginBottom: '1rem' }}
                    bodyStyle={{ display: 'flex' }}
                >
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} style={{ textAlign: 'center', borderRight: '1px solid #D4D4D4' }}>
                        <Row gutter={[8, 8]}>
                            <AffiliatesBadgeDiv channel={props.mappedHotel.masterSystem}/>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>{props.mappedHotel.code}</Text>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <DefaultButton
                                    style={{
                                        fontSize: '0.725rem',
                                        margin: '0 auto',
                                        backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                                    }}
                                    // onClick={props.onClick}
                                    prefixIcons={<SelectOutlined />}
                                    color={'#000'}
                                    text={'상세보기'}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <HotelInformationColumn record={props.mappedHotel}/>
                    </Col>
                </StyleMappedCard>
            </Col>
        </>
    )
}

export const StyleMappedCard = styled(Card)`
    .ant-checkbox {
        top: 0.32rem !important;
    }
`

export default MappedCard
