import React, { useState, useEffect } from 'react';
import {Col, Divider, Row, Typography} from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from '../Div/AffiliatesBadgeDiv';
import DefaultButton from '../Button/DefaultButton';
import { SelectOutlined } from '@ant-design/icons';
import TypeBadgeDiv from "../Div/TypeBadgeDiv";
import ReservationBadgeDiv from "../Div/ReservationBadgeDiv";
import PackageBadgeDiv from "../Div/PackageBadgeDiv";
import FamilyLoungeBadgeDiv from "../Div/FamilyLoungeBadgeDiv";
import UserAuthBadgeDiv from "../Div/UserAuthBadgeDiv";
import DefaultDivider from "../Divider/DefaultDivider";

const { Text } = Typography;

const ReservationHotelInformationColumn = (props) => {
    const { hotel } = props;

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.925rem' }}>{hotel.hotelName}</Text>
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.9rem' }}>{hotel.checkInDate} ~ {hotel.checkOutDate}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.9rem', marginRight: '0.255rem' }}>{hotel.adultCount + hotel.childCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>성인 {hotel.adultCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>·</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>어린이 {hotel.adultCount}명</Text>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ReservationHotelInformationColumn
