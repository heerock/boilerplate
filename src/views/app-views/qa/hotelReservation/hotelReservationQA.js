import React, { useState, useEffect } from 'react';
import { Col, DatePicker, Form, Row } from 'antd';

import DefaultInput from '../../../../components/shared-components/hotel/Input/DefaultInput';
import DefaultButton from '../../../../components/shared-components/hotel/Button/DefaultButton';

const { RangePicker } = DatePicker;

const HotelReservationQA = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row gutter={[8, 8]} style={{ alignItems: 'baseline' }}>
                        <Form.Item style={{ textAlign: 'left' }}>
                            <DefaultInput
                                placeholder={'호텔 코드를 입력하세요.'}
                                style={{ height: '2rem', lineHeight: '2rem' }}

                            />
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'left', margin: '0rem 0.525rem' }}>
                            <RangePicker
                                placeholder={['체크인', '체크아웃']}
                                style={{
                                    height: '2rem', lineHeight: '2rem'
                                }}
                            />
                        </Form.Item>

                        <DefaultButton
                            style={{
                                height: '2rem',
                                lineHeight: '2rem'
                            }}
                            text={'변경하기'}
                        />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default HotelReservationQA
