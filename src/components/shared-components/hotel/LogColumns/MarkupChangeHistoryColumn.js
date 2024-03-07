import React, { useState, useEffect } from 'react';
import {Col, Divider, Row, Typography} from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const MarkupChangeHistoryColumn = (props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        switch (props.record.category) {
            case 'SUPPLIER':
            case 'HOTEL':
                setValue(`마크업 변경 ${props.record.beforeMarkupRate}% → ${props.record.afterMarkupRate}%`)
                break;
            case 'HOTEL_BY_SUPPLIER':
                setValue(`마크업 변경 ${props.record.beforeMarkupRate}% → ${props.record.afterMarkupRate}%`)
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

export default MarkupChangeHistoryColumn
