import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';

const { Text } = Typography;

const ReservationDetail = () => {
    const { reservationId } = useParams();

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 상세 정보'}/>
                    </Row>
                    <Row>
                        {reservationId}
                    </Row>
				</Col>
			</Row>
		</>
	)
}

export default ReservationDetail
