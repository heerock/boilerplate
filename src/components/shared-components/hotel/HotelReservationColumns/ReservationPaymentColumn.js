import React, { useState, useEffect } from 'react';
import {Col, Divider, Row, Typography} from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from '../Div/AffiliatesBadgeDiv';
import DefaultButton from '../Button/DefaultButton';
import { SelectOutlined } from '@ant-design/icons';
import TypeBadgeDiv from "../Div/TypeBadgeDiv";
import ReservationBadgeDiv from "../Div/ReservationBadgeDiv";
import PackageBadgeDiv from "../Div/PackageBadgeDiv";

const { Text } = Typography;

const ReservationPaymentColumn = (props) => {
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'left' }}>
                <Row gutter={[0, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '0.225rem' }}>
                        <Text style={{ fontSize: '0.885rem', margin: '0 auto', fontWeight: 'bold' }}>{props.payment.payment.toLocaleString('ko-KR')}원</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>• {props.payment.paymentType.viewName}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>• 할인 전 총 결제금액 : {props.payment.principal.toLocaleString('ko-KR')}원</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>• 쿠폰 : {props.payment.useCoupon.toLocaleString('ko-KR')}원</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>• 포인트 : {props.payment.usePoint.toLocaleString('ko-KR')}원</Text>
                    </Col>
                    <Divider style={{ margin: '4px 2px' }}/>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>결제일 정보</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>• 결제일 : </Text>{props.payment.paymentDateTime}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>• 취소수수료 발생일 : </Text>{props.cancelPenalties[0].start}
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ReservationPaymentColumn
