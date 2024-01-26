import React, {useState} from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Col, Row, Form, Calendar } from 'antd';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import DateRangeSetting from './dateRangeSetting';


const MarkupDetail = () => {
	const [form] = Form.useForm();
	const [selectedDate, setSelectedDate] = useState([]);
    // const { hotelId } = useParams();

	const onFinish = (values) => {
		console.log('Received values of form:', values);

		const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

		const week = days.map((day) => {
			return { type: day, value: values[day] || false }
		})

		if (values.rangeDate) {
			const rangeDate = values.rangeDate.map((range) => {
				return {
					startDate: moment(range.rangeDate[0]).format('YYYY-MM-DD'),
					endDate: moment(range.rangeDate[1]).format('YYYY-MM-DD')
				}
			})
		}


	};

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 날짜별 마크업 설정'}/>
                    </Row>
                    <Row style={{ marginTop: '2rem' }}>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<Form form={form} onFinish={onFinish}>
								<DateRangeSetting form={form} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
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
