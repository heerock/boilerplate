import React, { useState, useEffect } from 'react';
import {Col, Row} from "antd";
import PageHeader from "../../../../components/shared-components/PageHeader/PageHeader";
import HotelReservationQA from "./hotelReservationQA";

const HotelReservation = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <>
            <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <PageHeader level={2} title={'QA > 호텔 예약 변경'}/>
                </Row>
                <Row>
                    <HotelReservationQA />
                </Row>
            </Col>
            </Row>
        </>
    )
}

export default HotelReservation
