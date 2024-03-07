import React, { useState, useEffect } from 'react';
import {Col, Divider, Row, Typography} from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const MarkupRangeColumn = (props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        switch (props.record.category) {
            case 'HOTEL':
                setValue('개별 호텔 전체 날짜/룸 마크업 변경')
                break;
            case 'SUPPLIER':
                setValue('공급처 공통 마크업 변경')
                break;
            case 'HOTEL_BY_SUPPLIER':
                setValue('공급처 공통 마크업 변경')
                break;
            default:
                break;
        }
    }, [props])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Text>{value}</Text>
            </Col>
        </>
    )
}

export default MarkupRangeColumn
