import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Calendar, Select, Row, Col, Radio, Typography, DatePicker, Form, Button } from 'antd';

import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultRangePicker from "../../../../../components/shared-components/hotel/DatePicker/DefaultRangePicker";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";

const { RangePicker } = DatePicker;
const { Title } = Typography;

const DateRangeContent = (props) => {

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ display: 'flex' }}>
                <Form.Item>
                    <DefaultCheckbox text={'전체'} checked={props.allChecked} onChange={props.onChange}/>
                </Form.Item>
                <Form.Item name={'mo'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'월'} />
                </Form.Item>
                <Form.Item name={'tu'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'화'} />
                </Form.Item>
                <Form.Item name={'we'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'수'} />
                </Form.Item>
                <Form.Item name={'th'} valuePropName={'checked'}>
                <DefaultCheckbox text={'목'} />
                </Form.Item>
                <Form.Item name={'fr'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'금'} />
                </Form.Item>
                <Form.Item name={'sa'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'토'} />
                </Form.Item>
                <Form.Item name={'su'} valuePropName={'checked'}>
                    <DefaultCheckbox text={'일'} />
                </Form.Item>
            </Col>
            <Row gutter={[8, 4]}>
                <Form.List name="rangeDate" style={{ marginTop: '1.225rem' }}>
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map((field) => (
                            <>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display: 'flex', alignItems: 'baseline' }}>
                                    <Form.Item
                                        {...field}
                                        style={{ marginBottom: 0 }}
                                        name={[field.name, 'rangeDate']}
                                    >
                                        <StyleRangeDatePicker placeholder={['YYYY-MM-DD', 'YYYY-MM-DD']}/>
                                    </Form.Item>
                                    <MinusCircleOutlined style={{ marginLeft: '0.525rem' }} onClick={() => remove(field.name)} />
                            </Col>
                            </>
                        ))}

                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Form.Item style={{ width: '20%' }}>
                                <DefaultButton
                                    style={{
                                        backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)',
                                    }}
                                    color={'#666464'}
                                    text={'날짜 범위 추가 선택'}
                                    onClick={() => add()}
                                    block
                                    prefixIcons={<PlusOutlined />}
                                />
                            </Form.Item>
                        </Col>
                    </>
                    )}
                </Form.List>
            </Row>
		</>
	)
}

export const StyleRangeDatePicker = styled(RangePicker)`
  height: 2rem;
  font-size: 0.805rem;
  
  input {
    font-size: 0.805rem;
  }
  
`

export default DateRangeContent
