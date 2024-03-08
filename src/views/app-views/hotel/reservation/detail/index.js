import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import ReservationService from "../../../../../services/Reservation/ReservationService";

const { Text } = Typography;

const ReservationDetail = () => {
	const [loading, setLoading] = useState(false);
    const { reservationId } = useParams();


	const getFetch = async (id) => {
		const response = await getReservationDetail(id);

		console.log('response : ', response)

	}

	const getReservationDetail = async (id) => {
		return await ReservationService.findReservationDetail(id);
	}

	useEffect(() => {
		setLoading(true)

		Promise.allSettled([getFetch(reservationId)]).then(() => setLoading(false))
	}, [])

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
