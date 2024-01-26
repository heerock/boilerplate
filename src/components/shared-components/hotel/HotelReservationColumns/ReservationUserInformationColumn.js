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
    const { hotel } = props;
    console.log('props : ', props)
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '1rem' }}>{hotel.booker.name}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <FamilyLoungeBadgeDiv status={'NONE'} style={{ float: 'left', width: '4rem', marginRight: '0.425rem', color: '#000'}}/>
                        <UserAuthBadgeDiv status={'SUCCESS'} style={{ float: 'left',  width: '3rem' }}/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem' }}>{hotel.booker.email}</Text>
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', fontWeight: '600' }}>{hotel.booker.phoneNumber}</Text>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ReservationUserInformationColumn
