import React, { useState } from 'react';
import { Col, Row, Tabs, typo, Typography } from 'antd';
import DefaultTextArea from '../../../../../../../components/shared-components/hotel/Input/DefaultTextArea';
import { StyleCard } from '../HotelDetailModal';

const { Text, Title } = Typography;
const HotelImportantInformation = (props) => {
    return (
        <>
            <StyleCard title={'중요 정보'} >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>주요 안내사항</Title>
                        { props?.editMode ?
                            <DefaultTextArea />
                            :
                            ''
                        }
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>지불 요금</Title>
                        { props?.editMode ?
                            <DefaultTextArea />
                            :
                            ''
                        }
                    </Col>
                </Row>
            </StyleCard>
        </>
    )
}

export default HotelImportantInformation
