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
import Utils from "../../../../utils";
import ReservationStatusBadgeDiv from "../Div/ReservationCarStatusBadgeDiv";
import ReservationCarStatusBadgeDiv from "../Div/ReservationCarStatusBadgeDiv";

const { Text } = Typography;

const ReservationCarInformationColumn = (props) => {
    const { reservationCar } = props;

    return (
        <>
            {
                reservationCar &&
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                    <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                        <Col>
                            <ReservationCarStatusBadgeDiv status={Utils.getReservationCarStatus(reservationCar.status)} />
                        </Col>
                        <DefaultDivider />
                        <Row gutter={[4, 4]}>
                            {/*<Col style={{ display: 'flex' }}>*/}
                            {/*    <AffiliatesBadgeDiv channel={reservationHotel.sourceSystem} style={{ marginRight: '0.255rem', fontWeight: 'bold' }}/>*/}
                            {/*    <Text style={{ fontWeight: 'bold' }}>{reservationHotel.hotelCode}</Text>*/}
                            {/*</Col>*/}
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.785rem', marginRight: '0.255rem' }}>렌트카 예약번호 :</Text>
                                <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.785rem' }}>{reservationCar?.carReservationNumber}</Text>
                            </Col>
                        </Row>
                        <DefaultDivider />
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex', alignItems: 'center', height: '7rem' }}>
                        {/*    <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.9rem' }}>{reservationHotel.checkInDate} ~ {reservationHotel.checkOutDate}</Text>*/}
                        </Col>
                    </Row>
                </Col>
            }
        </>
    )
}

export default ReservationCarInformationColumn
