import React, { useState, useEffect } from 'react';
import {Col, Divider, Row, Typography} from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from '../Div/AffiliatesBadgeDiv';
import DefaultButton from '../Button/DefaultButton';
import { SelectOutlined } from '@ant-design/icons';
import TypeBadgeDiv from "../Div/TypeBadgeDiv";
import ReservationBadgeDiv from "../Div/ReservationBadgeDiv";
import PackageBadgeDiv from "../Div/PackageBadgeDiv";
import Utils from "../../../../utils";

const { Text } = Typography;

const ReservationPaymentColumn = (props) => {

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'left' }}>
                <Row gutter={[0, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '0.225rem' }}>
                        <Text style={{ fontSize: '0.885rem', margin: '0 auto', fontWeight: 'bold' }}>
                            {/*{props?.payment.payment.toLocaleString('ko-KR')}원*/}
                            {props.isPackage ? (props.reservationHotel.payment.paymentAmount + props.reservationCar.payment.paymentAmount).toLocaleString('ko-KR') : props.reservationHotel.payment.paymentAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>
                            • {Utils.getPaymentType(props?.reservationHotel.payment.paymentType)}
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>
                            • 할인 전 총 결제금액 : {props.isPackage ? (props.reservationHotel.payment.principalAmount + props.reservationCar.payment.principalAmount).toLocaleString('ko-KR') : props.reservationHotel.payment.principalAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>
                            • 쿠폰 : -{props.isPackage ? (props.reservationHotel.payment.useCouponAmount + props.reservationCar.payment.useCouponAmount).toLocaleString('ko-KR') : props.reservationHotel.payment.useCouponAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.865rem', margin: '0 auto' }}>
                            • 포인트 : -{props.isPackage ? (props.reservationHotel.payment.usePointAmount + props.reservationCar.payment.usePointAmount).toLocaleString('ko-KR') : props.reservationHotel.payment.usePointAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Col>
                    <Divider style={{ margin: '4px 2px' }}/>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>결제일 정보</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>• 결제일 : </Text>
                        {Utils.getDateTimeKr(props.paymentDate)}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>• 호텔 취소수수료 발생일 : </Text>
                        {Utils.getDateTimeKr(props?.reservationHotel.cancelPenaltyStartDate)}
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ReservationPaymentColumn
