import React, { useState, useEffect } from 'react';
import {Col, Input, Popconfirm, Row, Space, Switch, Typography} from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from "../Div/AffiliatesBadgeDiv";
import DefaultButton from "../Button/DefaultButton";
import DefaultInputNumber from "../Input/DefaultInputNumber";

const { Text } = Typography;

const HotelMarkupColumn = (props) => {
    const { record } = props;
    const [rate, setRate] = useState(record.markupRate || record?.rate);
    const onChangeRate = (value) => {
        setRate(value)
    }

    const onConfirm = () => {
        props.onClick(record, rate)
    }

    useEffect(() => {
        if ('markupRate' in record) {
            setRate(record.markupRate)
        }
    }, [record.markupRate])

    useEffect(() => {
        if ('rate' in record) {
            setRate(record.rate)
        }
    }, [record.rate])

    return (
        <>
            <Col>
                <Space>
                    <DefaultInputNumber
                        min={0}
                        max={100}
                        step={1}
                        placeholder={0}
                        value={rate}
                        onChange={onChangeRate}
                    />
                    <Text>%</Text>
                    <Popconfirm placement="top" title={'정말로 변경하시겠습니까?'} onConfirm={() => onConfirm()} okText="Yes" cancelText="No">
                        <DefaultButton
                            style={{
                                backgroundColor: '#6DAE60',
                                width: '2rem',
                                fontWeight: 'bold'
                            }}
                            text={`저장`}
                        />
                    </Popconfirm>
                </Space>
            </Col>
        </>
    )
}

export default HotelMarkupColumn

export const StyleText = styled(Text)`
  font-size: 0.785rem;
`
