import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Calendar, Select, Row, Col, Radio, Typography, DatePicker, Form, Button } from 'antd';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';

const { RangePicker } = DatePicker;
const { Title } = Typography;

const DateRangeContent = (props) => {

	return (
		<>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <DefaultCheckbox text={'전체'} />
                    <DefaultCheckbox text={'월'} />
                    <DefaultCheckbox text={'화'} />
                    <DefaultCheckbox text={'수'} />
                    <DefaultCheckbox text={'목'} />
                    <DefaultCheckbox text={'금'} />
                    <DefaultCheckbox text={'토'} />
                    <DefaultCheckbox text={'일'} />
                </Col>
                
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '0.825rerm' }}>
                    <RangePicker style={{width: '20%'}} />
                </Col>
                <Form.List name="rangeDate">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map((field) => (
                            <>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display: 'flex', alignItems: 'baseline' }}>
                                    <Form.Item
                                        {...field}
                                        style={{ width: '20%', marginBottom: 0 }}
                                        // label="date"
                                        name={[field.name, 'rangeDate']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing price',
                                            },
                                        ]}
                                        >
                                        <RangePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                    <MinusCircleOutlined style={{ marginLeft: '0.825rem' }} onClick={() => remove(field.name)} />
                            </Col>
                            </>
                        ))}

                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Form.Item style={{ width: '20%' }}>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    날짜 범위 추가 선택
                                </Button>
                            </Form.Item>
                        </Col>
                    </>
                    )}
                </Form.List>
            </Row>
		</>
	)
}

export default DateRangeContent
