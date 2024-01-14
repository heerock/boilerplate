import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Form, Calendar } from 'antd';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import DateRangeSetting from './dateRangeSetting';

const { Text } = Typography;

const MarkupDetail = () => {
    const { hotelId } = useParams();

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 날짜별 마크업 설정'}/>
                    </Row>
                    <Row style={{ marginTop: '2rem' }}>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<Form>
								<DateRangeSetting />
							</Form>
						</Col>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '2rem' }}>
							<Calendar />
						</Col>
                    </Row>
				</Col>
			</Row>
		</>
	)
}

export default MarkupDetail
