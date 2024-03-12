import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Spin, Tabs} from 'antd';
import ReservationFullStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationFullStatusBadgeDiv";
import DefaultDivider from "../../../../../../components/shared-components/hotel/Divider/DefaultDivider";
import {ADMIN_HOST} from "../../../../../../configs/HostConfig";
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import FamilyLoungeBadgeDiv from "../../../../../../components/shared-components/hotel/Div/FamilyLoungeBadgeDiv";
const { Title, Text } = Typography;

const ReservationBookerInformation = (props) => {
    const { record } = props;
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ display: 'inline-flex', alignItems: 'center', padding: '0rem 0.4rem' }}>
                    <Title level={4} style={{ fontWeight: 'bold', fontSize: '1rem', margin: '0', marginRight: '0.225rem' }}>예매자</Title>
                    <ReservationFullStatusBadgeDiv status={record?.fullStatus}/>
                </Row>
                <DefaultDivider style={{ border: '1px solid rgba(233, 233, 233, 1)' }}/>

                <Col style={{ margin: '0 auto', padding: '0rem 0.4rem'}}>
                    <Row>
                        <Text style={{ marginRight: '0.225rem' }}>예약번호 : </Text>
                        <Text style={{ fontWeight: 'bold' }}>{record?.reservationNumber}</Text>
                    </Row>
                    <DefaultDivider />
                    <Row>
                        <DefaultButton
                            type={'link'}
                            href={`${ADMIN_HOST}/carmore/AppUser?sp=tul_id&sv=${record?.user.email}`}
                            color={'#5b9af3'}
                            text={record?.user.email}
                            style={{ float: 'left', paddingLeft: 0, fontSize: '0.825rem', background: 'none' }}
                        />
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '0.125rem', height: '1.2rem' }}>
                            {
                                record && record?.user.email !== '' &&
                                <FamilyLoungeBadgeDiv status={record?.user.grade} style={{ float: 'left', marginRight: '0.425rem', height: '1.2rem' }}/>
                            }
                            {/*<UserAuthBadgeDiv status={'SUCCESS'} style={{ float: 'left',  width: '3rem' }}/>*/}
                        </Col>
                    </Row>

                    <DefaultDivider />
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ marginRight: '0.225rem' }}>예약자명 : </Text>
                        <Text>{record?.reservationHotel.booker.name}</Text>
                    </Row>
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ marginRight: '0.225rem' }}>휴대폰 번호 : </Text>
                        <Text>{record?.reservationHotel.booker.phoneNumber}</Text>
                    </Row>
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text>{record?.reservationHotel.booker.email}</Text>
                    </Row>

                    <DefaultDivider />
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ marginRight: '0.225rem' }}>인입 경로 : </Text>
                        <Text>{record?.user && record?.user.phoneType === 'a' ? '안드로이드' : '아이폰'}</Text>
                    </Row>

                    <DefaultDivider />
                    <Row>
                        <Text style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>고객 이슈</Text>
                    </Row>
                    <Row style={{ fontSize: '0.785rem' }}>
                        <Text style={{ fontSize: '0.825rem' }}>{record?.customerIssue}</Text>
                    </Row>
                </Col>
            </Col>
        </>
    )
}

export default ReservationBookerInformation
