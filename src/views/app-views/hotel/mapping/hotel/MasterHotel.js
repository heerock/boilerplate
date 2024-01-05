import React, { useState, useEffect } from 'react';
import { Col, Row, Typography, Select, Checkbox, Input, Form } from 'antd';
import styled from 'styled-components';
import MasterHotelTable from './MasterHotelTable';
import DefaultSelect from "../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultCheckbox from "../../../../../components/shared-components/hotel/Checkbox/DefaultCheckbox";
import DefaultSearch from "../../../../../components/shared-components/hotel/Search/DefaultSearch";

const { Text } = Typography;
const { Search } = Input;

const defaultData = [
    { key: '1', masterHotelCode: 'EX12345678', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '2', masterHotelCode: 'EX12345679', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '3', masterHotelCode: 'EX12345680', vendorHotelCode: 'HK12345678', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '4', masterHotelCode: 'EX12345681', vendorHotelCode: 'HK12345679', channel: 'EXPEDIA', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
]

const MasterHotel = (props) => {
    const [data, setData] = useState([]);
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    const onChange = () => {

    }

    useEffect(() => {
        if(props.selectedVendorHotelKey) setData(defaultData.filter((data) => data.vendorHotelCode === props.selectedVendorHotelKey.vendorHotelCode))
    }, [props.selectedVendorHotelKey])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Form.Item style={{ marginBottom: '0.325rem' }}>
                    <DefaultCheckbox
                        onChange={onChange}
                        text={'매핑하지 않은 호텔만 보기'}
                    />
                </Form.Item>
            </Col>
            <Row gutter={[8, 16]} style={{ padding: '0 0.3rem' }}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <DefaultSelect
                        width={100}
                        placeholder={`마스터 호텔코드`}
                    />
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18} style={{ padding: '0 0.3rem' }}>
                    <DefaultSearch
                        placeholder="마스터 호텔 정보를 검색해주세요."
                        onSearch={onSearch}
                        style={{
                            width: `100%`,
                        }}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <MasterHotelTable data={data}/>
                </Col>
            </Row>
		</>
	)
}

export const StyleCheckbox = styled(Checkbox)`
    .ant-checkbox {
        top: 0.32rem !important;
    }
`

export default MasterHotel
