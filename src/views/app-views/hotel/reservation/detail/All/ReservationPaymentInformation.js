import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Spin, Tabs} from 'antd';
import ReservationFullStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationFullStatusBadgeDiv";
import DefaultDivider from "../../../../../../components/shared-components/hotel/Divider/DefaultDivider";
import {ADMIN_HOST} from "../../../../../../configs/HostConfig";
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import FamilyLoungeBadgeDiv from "../../../../../../components/shared-components/hotel/Div/FamilyLoungeBadgeDiv";
import ReservationCarStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationCarStatusBadgeDiv";
import Utils from "../../../../../../utils";
const { Title, Text } = Typography;

const ReservationPaymentInformation = (props) => {
    const { record, carInfo, isGlobalApi } = props;
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ display: 'inline-flex', alignItems: 'center', padding: '0rem 0.4rem' }}>
                    <Title level={4} style={{ fontWeight: 'bold', fontSize: '1rem', margin: '0', marginRight: '0.225rem' }}>총 결제정보</Title>
                </Row>

                <DefaultDivider style={{ border: '1px solid rgba(233, 233, 233, 1)' }}/>
                <Col style={{ margin: '0 auto', padding: '0rem 0.4rem' }}>
                    <Row>
                        <Text style={{ fontSize: '0.845rem', fontWeight: 'bold' }}>
                            {/*{props?.payment.payment.toLocaleString('ko-KR')}원*/}
                            {record?.isPackage ? (record?.reservationHotel.payment.paymentAmount + record?.reservationCar.payment.paymentAmount).toLocaleString('ko-KR') : record?.reservationHotel.payment.paymentAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: '0.785rem' }}>
                            • {Utils.getPaymentType(record?.reservationHotel.payment.paymentType)}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: '0.785rem' }}>
                            • 할인 전 총 결제금액 : {record?.isPackage ? (record?.reservationHotel.payment.principalAmount + record?.reservationCar.payment.principalAmount).toLocaleString('ko-KR') : record?.reservationHotel.payment.principalAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: '0.785rem' }}>
                            • 쿠폰 : -{record?.isPackage ? (record?.reservationHotel.payment.useCouponAmount + record?.reservationCar.payment.useCouponAmount).toLocaleString('ko-KR') : record?.reservationHotel.payment.useCouponAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: '0.785rem' }}>
                            • 포인트 : -{record?.isPackage ? (record?.reservationHotel.payment.usePointAmount + record?.reservationCar.payment.usePointAmount).toLocaleString('ko-KR') : record?.reservationHotel.payment.usePointAmount.toLocaleString('ko-KR')}원
                        </Text>
                    </Row>
                    <DefaultDivider />
                    <Row gutter={[8, 0]} style={{ display: 'grid' }}>
                        <Row>
                            <Title level={5} style={{ fontWeight: 'bold', fontSize: '0.805rem' }}>호텔 결제정보</Title>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 결제금액 : {record?.reservationHotel.payment.paymentAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 판매가 : {record?.reservationHotel.payment.principalAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 입금가 : {record?.reservationHotel.payment.sourceSystemPrepaidAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 마진 : {record?.reservationHotel.payment.profitAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 쿠폰 : {record?.reservationHotel.payment.useCouponAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.785rem' }}>
                                • 포인트 : {record?.reservationHotel.payment.usePointAmount.toLocaleString('ko-KR')}원
                            </Text>
                        </Row>
                        {
                            record?.reservationHotel?.payment?.poaAmount &&
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 호텔 현장 결제 : {record?.reservationHotel?.payment?.poaAmount.toLocaleString('ko-KR')}원 ({record?.reservationHotel?.payment?.poaCurrency})
                                </Text>
                            </Row>
                        }
                    </Row>

                    <DefaultDivider />

                    { isGlobalApi
                    ?
                        <Row gutter={[8, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Title level={5} style={{ fontWeight: 'bold', fontSize: '0.805rem' }}>렌트카 결제정보</Title>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 결제금액 : {carInfo?.reservation && carInfo?.reservation?.paymentAmount && carInfo?.reservation?.paymentAmount.toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 원금 : {carInfo?.reservation && carInfo?.reservation?.principalAmount && carInfo?.reservation?.principalAmount.toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 쿠폰 : {carInfo?.reservation && Number(carInfo?.reservation.useCouponAmount).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 포인트 : {carInfo?.reservation && Number(carInfo?.reservation.usePointAmount).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>

                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 현장결제 : 약 {carInfo?.reservation && carInfo?.reservation?.payOnArrival.price.toLocaleString('ko-KR')}원 ({ carInfo?.reservation && Number(carInfo?.reservation?.payOnArrival.localPrice)} {carInfo?.reservation.payOnArrival.currency})
                                </Text>
                            </Row>
                            {
                                carInfo?.reservation?.cdwAddon &&
                                <Row>
                                    <Text style={{ fontSize: '0.785rem' }}>
                                        • 자차플러스 : {carInfo?.reservation?.cdwAddon && Number(carInfo?.reservation.cdwAddon.price).toLocaleString('ko-KR')}원
                                    </Text>
                                </Row>

                            }
                        </Row>
                    :
                        <Row gutter={[8, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Title level={5} style={{ fontWeight: 'bold', fontSize: '0.805rem' }}>렌트카 결제정보</Title>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 결제금액 : {carInfo?.car?.reservList && carInfo?.car?.reservList[0]?.payment.toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 원금 : {carInfo?.car?.reservList && carInfo?.car?.reservList[0]?.principal.toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 보험료 : {carInfo?.car?.reservList && carInfo?.car?.reservList[0]?.cdwCost.toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 대여료 : {carInfo?.car?.reservList && Number(carInfo?.car.reservList[0].rentalCost).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 쿠폰 : {carInfo?.car?.reservList && Number(carInfo?.car.reservList[0].useCouponValue).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 포인트 : {carInfo?.car?.reservList && Number(carInfo?.car.reservList[0].usePoint).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>

                            <Row>
                                <Text style={{ fontSize: '0.785rem' }}>
                                    • 배송비용 : {carInfo?.car?.reservList && Number(carInfo?.car.reservList[0].delivCost).toLocaleString('ko-KR')}원
                                </Text>
                            </Row>
                            {
                                carInfo?.reservation?.cdwAddon &&
                                <Row>
                                    <Text style={{ fontSize: '0.785rem' }}>
                                        • 자차플러스 : {carInfo?.reservation?.cdwAddon && Number(carInfo?.reservation.cdwAddon.price).toLocaleString('ko-KR')}원
                                    </Text>
                                </Row>

                            }
                        </Row>
                    }

                    <DefaultDivider />
                    <Row>
                        <Title level={5} style={{ fontWeight: 'bold', fontSize: '0.805rem' }}>결제일 정보</Title>
                    </Row>

                    <Row>
                        <Text style={{ fontSize: '0.785rem' }}>
                            • 결제일 : {Utils.getDateTimeKr(record?.paymentDate)}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: '0.775rem' }}>• 호텔 취소수수료 발생일 : </Text>
                        <Text style={{ fontSize: '0.765rem'}}>{Utils.getDateTimeKr(record?.reservationHotel.cancelPenaltyStartDate)}</Text>
                    </Row>
                </Col>
            </Col>
        </>
    )
}

export default ReservationPaymentInformation
