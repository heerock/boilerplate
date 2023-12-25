import React, { useState } from 'react';
import { Col, Row, Typography, Select, Checkbox, Input } from 'antd';
import styled from 'styled-components';
import MasterHotelTable from './MasterHotelTable';

const { Text } = Typography;
const { Search } = Input;

const MasterHotel = () => {
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    const onChange = () => {

    }

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                            <StyleCheckbox
                                onChange={onChange}
                            >
                                <Text>매핑하지 않은 호텔만 보기</Text>
                            </StyleCheckbox>
                    </Row>
                    <Row gutter={[8, 0]}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Select
                            defaultValue={null}
                            options={[
                                {label: `마스터 호텔코드`, value: null},
                            ]}
                            />
                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
                            <Search
                                placeholder="마스터 호텔 정보를 검색해주세요."
                                onSearch={onSearch}
                                style={{
                                    width: `100%`,
                                }}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                            <MasterHotelTable />
                    </Row>
            </Col>
		</>
	)
}

export const StyleCheckbox = styled(Checkbox)`
    .ant-checkbox {
        top: 0.32rem !important;
    }
`

export default MasterHotel
