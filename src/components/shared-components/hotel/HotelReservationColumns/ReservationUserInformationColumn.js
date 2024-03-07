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

const ReservationUserInformationColumn = (props) => {
    const { reservationHotel } = props;
    console.log('props : ', props)
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ float: 'left', fontSize: '0.805rem', marginRight: '0.325rem' }}>예약번호 :</Text><Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.805rem' }}>{props.reservationNumber}</Text>
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        {/*/carmore/AppUser?sp=tul_id&sv=*/}
                        <DefaultButton type={'link'} href={''} color={'#000'} text={reservationHotel.booker.email} style={{ float: 'left', paddingLeft: 0, fontSize: '0.825rem', background: 'none' }} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '0.225rem' }}>
                        <FamilyLoungeBadgeDiv status={props.user.grade} style={{ float: 'left', width: '4rem', marginRight: '0.425rem', color: '#000'}}/>
                        <UserAuthBadgeDiv status={'SUCCESS'} style={{ float: 'left',  width: '3rem' }}/>
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '5rem' }}>
                        <Text style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>고객 이슈</Text>
                    </Col>
                    <Text style={{ fontSize: '0.825rem' }}>{props.customerIssue}</Text>
                    {/*<DefaultDivider />*/}
                    {/*<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>*/}
                    {/*    <Text style={{ fontSize: '0.825rem', fontWeight: '600' }}>{reservationHotel.booker.phoneNumber}</Text>*/}
                    {/*</Col>*/}
                </Row>
            </Col>
        </>
    )
}

export default ReservationUserInformationColumn
