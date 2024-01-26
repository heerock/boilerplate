import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import MappingHotel from './MappingHotel';
import MappingSetting from './setting/MappingSetting';

const HotelMapping = () => {
	const [tabs, setTabs] = useState([
		{ label: `호텔매핑`, key: `HOTEL_MAPPING`},
		{ label: `매핑 내역 관리`, key: `HOTEL_MAPPING_MANAGE`},
	]);
	const [selectedKey, setSelectedKey] = useState(`HOTEL_MAPPING`);

	const onChange = (key) => {
		setSelectedKey(key);
	};

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
				<Tabs
					onChange={onChange}
					type="card"
					items={tabs}
					activeKey={selectedKey}
					defaultActiveKey={`HOTEL_MAPPING`}
				/>
				</Col>

				{
					selectedKey === `HOTEL_MAPPING` ? <MappingHotel /> : <MappingSetting />
				}
			</Row>
		</>
	)
}

export default HotelMapping
