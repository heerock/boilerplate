import React, { useState } from 'react';
import { Col, Row, Typography } from 'antd';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import ReservationListTable from './ReservationListTable';

const { Text } = Typography;

const ReservationList = () => {

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 예약 관리'}/>
                    </Row>
                    <Row>
                        <SearchFilter />
                    </Row>
                    <Row gutter={[8, 8]} style={{ marginTop: '1.825rem' }}>
                        <ReservationListTable />
                    </Row>
				</Col>
			</Row>
		</>
	)
}

export default ReservationList
