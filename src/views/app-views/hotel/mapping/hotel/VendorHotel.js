import React, { useState } from 'react';
import { Col, Row, Radio, Space, Typography, Select, Input, Checkbox, Form } from 'antd';
import styled from 'styled-components';
import VendorHotelTable from './VendorHotelTable';
import DefaultSelect from "../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultSearch from "../../../../../components/shared-components/hotel/Search/DefaultSearch";
import DefaultCheckbox from "../../../../../components/shared-components/hotel/Checkbox/DefaultCheckbox";

const { Text } = Typography;
const { Search } = Input;
const defaultData = [
    { key: '1', vendorHotelCode: 'HK12345678', channel: 'HG', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '2', vendorHotelCode: 'HK12345679', channel: 'HG', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL2', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    { key: '3', vendorHotelCode: 'HK12345680', channel: 'HG', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL3', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
]


const VendorHotel = (props) => {
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    const onChange = () => {

    }

	return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[8, 8]} style={{ padding: '0 0.3rem' }}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <DefaultSelect
                            width={100}
                            placeholder={'== 국가 선택 =='}
                        />
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <DefaultSelect
                            placeholder={'== 도시 선택 =='}
                        />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <DefaultSelect
                            width={100}
                            placeholder={'공급업체 호텔코드'}
                        />
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <DefaultSearch
                            placeholder="공급처 호텔 정보를 검색해주세요."
                            onSearch={onSearch}
                            style={{
                                width: `100%`,
                            }}
                        />
                    </Col>
                </Row>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Form.Item style={{ textAlign: 'left' }}>
                        <DefaultCheckbox
                            onChange={onChange}
                            text={'매핑하지 않은 호텔만 보기'}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ padding: '0 0.3rem' }}>
                    <VendorHotelTable
                        setSelectedVendorHotelKey={props.setSelectedVendorHotelKey}
                        data={defaultData}
                    />
                </Col>
            </Col>
        </>
	)
}

export default VendorHotel
