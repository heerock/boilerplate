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
import ReservationHotelStatusBadgeDiv from "../Div/ReservationHotelStatusBadgeDiv";

const { Text } = Typography;

const ReservationHotelInformationColumn = (props) => {
    const { reservationHotel } = props;

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                    <Col>
                        <ReservationHotelStatusBadgeDiv status={reservationHotel.status}/>
                    </Col>
                    <DefaultDivider />
                    <Row gutter={[4, 4]}>
                        <Col style={{ display: 'flex' }}>
                            <AffiliatesBadgeDiv channel={reservationHotel.sourceSystem} style={{ marginRight: '0.255rem', fontWeight: 'bold' }}/>
                            <Text style={{ fontWeight: 'bold', fontSize: '0.785rem' }}>{reservationHotel.hotelCode}</Text>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.925rem' }}>{reservationHotel.hotelName}</Text>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Text style={{ float: 'left', fontSize: '0.805rem' }}>{reservationHotel.country.name}</Text>
                        </Col>
                    </Row>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.9rem' }}>{reservationHotel.checkInDate} ~ {reservationHotel.checkOutDate}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center', height: '2rem' }}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.9rem', marginRight: '0.255rem' }}>{reservationHotel.adultCount + reservationHotel.childCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>성인 {reservationHotel.adultCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>·</Text>
                        <Text style={{ float: 'left', fontSize: '0.825rem' }}>어린이 {reservationHotel.adultCount}명</Text>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ReservationHotelInformationColumn
