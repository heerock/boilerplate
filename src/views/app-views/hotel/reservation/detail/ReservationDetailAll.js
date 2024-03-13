import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Card, Spin } from 'antd';
import styled from "styled-components";
import ReservationBookerInformation from "./All/ReservationBookerInformation";
import ReservationHotelInformation from "./All/ReservationHotelInformation";
import ReservationCarInformation from "./All/ReservationCarInformation";
import ReservationPaymentColumn
    from "../../../../../components/shared-components/hotel/HotelReservationColumns/ReservationPaymentColumn";
import ReservationPaymentInformation from "./All/ReservationPaymentInformation";


const { Text } = Typography;

const ReservationDetailAll = (props) => {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>

                            <StyleCard
                                title={"예약 총괄정보"}
                                headStyle={{
                                    background: 'linear-gradient(0deg, #F5F5F5, #F5F5F5), linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #E8E8E8 100%)',
                                    paddingLeft: '1rem'
                                }}
                            >
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                        <ReservationBookerInformation record={props.record}/>
                                    </Col>
                                    {
                                        props.record?.reservationHotel &&
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                            <ReservationHotelInformation record={props.record}/>
                                        </Col>
                                    }
                                    {
                                        props.record?.reservationCar &&
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                            <ReservationCarInformation record={props.record} carInfo={props.carInfo} isGlobalApi={props.isGlobalApi} />
                                        </Col>
                                    }
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                        <ReservationPaymentInformation record={props.record} carInfo={props.carInfo} isGlobalApi={props.isGlobalApi} />
                                    </Col>
                                </Row>


                            </StyleCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ReservationDetailAll

export const StyleCard = styled(Card)`
  display: block;
  border: 1px solid rgba(212, 212, 212, 1);
  .ant-card-head {
    background: #fafafa;
    border-bottom: 1px solid rgba(212, 212, 212, 1);
    .ant-card-head-title {
      padding: 10px 0 !important;
      font-size: 0.925rem;
    }
    .ant-card-extra {
        padding: 0;
    }
  }
  
  .ant-card-body {
    //height: 50vh;
    //overflow: hidden;
    //overflow-y: scroll;
  }
`
