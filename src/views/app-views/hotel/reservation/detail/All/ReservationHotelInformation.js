import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Spin, Tabs} from 'antd';
import ReservationFullStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationFullStatusBadgeDiv";
import DefaultDivider from "../../../../../../components/shared-components/hotel/Divider/DefaultDivider";
import {ADMIN_HOST} from "../../../../../../configs/HostConfig";
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import FamilyLoungeBadgeDiv from "../../../../../../components/shared-components/hotel/Div/FamilyLoungeBadgeDiv";
import ReservationHotelStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationHotelStatusBadgeDiv";
import AffiliatesBadgeDiv from "../../../../../../components/shared-components/hotel/Div/AffiliatesBadgeDiv";
import Utils from "../../../../../../utils";
const { Title, Text } = Typography;

const ReservationHotelInformation = (props) => {
    const { record } = props;
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ display: 'inline-flex', alignItems: 'center', padding: '0rem 0.4rem' }}>
                    <Title level={4} style={{ fontWeight: 'bold', fontSize: '1rem', margin: '0', marginRight: '0.225rem' }}>호텔 숙박정보</Title>
                    <ReservationHotelStatusBadgeDiv status={record?.reservationHotel.status}/>
                </Row>

                <DefaultDivider style={{ border: '1px solid rgba(233, 233, 233, 1)' }}/>
                <Col style={{ margin: '0 auto', padding: '0rem 0.4rem' }}>
                    <Row>
                        <Text style={{ marginRight: '0.225rem' }}>공급처 예약번호 : </Text>
                        <Text style={{ fontWeight: 'bold' }}>{record?.reservationHotel.sourceSystemReservationNumber}</Text>
                    </Row>
                    <DefaultDivider />
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ marginRight: '0.225rem' }}>숙박자 이름 : </Text>
                        <Text>{record?.reservationHotel.guest.name}</Text>
                    </Row>
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ marginRight: '0.225rem' }}>휴대폰 번호 : </Text>
                        <Text>{record?.reservationHotel.guest.phoneNumber}</Text>
                    </Row>

                    <DefaultDivider />
                    <Row style={{ display: 'inline-flex'}}>
                        <AffiliatesBadgeDiv channel={record?.reservationHotel.sourceSystem}/>
                        <Text style={{ marginLeft: '0.225rem', fontWeight: 'bold', fontSize: '0.825rem' }}>{record?.reservationHotel.hotelCode}</Text>
                    </Row>
                    <Row>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.825rem' }}>{record?.reservationHotel.hotelName}</Text>
                    </Row>
                    <Row>
                        <Text style={{ float: 'left', fontSize: '0.805rem' }}>{record?.reservationHotel.country.name}</Text>
                    </Row>

                    <DefaultDivider />
                    <Row>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.785rem' }}>{record?.reservationHotel.checkInDate} ~ {record?.reservationHotel.checkOutDate}</Text>
                    </Row>

                    <Row>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.785rem', marginRight: '0.255rem' }}>{record?.reservationHotel.adultCount + record?.reservationHotel.childCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>성인 {record?.reservationHotel.adultCount}명</Text>
                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>어린이 {record?.reservationHotel.childCount}명</Text>
                        <Text>
                            {
                                record && record?.reservationHotel.childAges.length > 0 &&
                                `(${record.reservationHotel.childAges.map((age) => `${age}세`).join()})`
                            }
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ float: 'left', fontSize: '0.805rem' }}>{record?.reservationHotel.roomName}</Text>
                    </Row>
                        {
                            record?.reservationHotel.amenities.map((amenity) =>
                                <Row key={amenity.value}>
                                    <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                                    <Text>{amenity.value}</Text>
                                </Row>
                            )
                        }

                    <DefaultDivider />
                    <Row>
                        <Text style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>고객 이슈</Text>
                    </Row>
                    {
                        record?.reservationHotel.specialRequest.specialRequestTypes.map((type) =>
                            <Row key={type}>
                                <Text style={{ float: 'left', fontSize: '0.805rem', fontWeight: 'bold' }}>·</Text>
                                <Text>{Utils.getReservationSpecialRequestType(type)}</Text>
                            </Row>
                        )
                    }
                </Col>
            </Col>
        </>
    )
}

export default ReservationHotelInformation
