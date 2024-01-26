import React, { useState } from 'react';
import { Col, Row, Tabs, typo, Typography } from 'antd';
import DefaultTextArea from '../../../../../../../components/shared-components/hotel/Input/DefaultTextArea';
import { StyleCard } from '../VendorHotelDetailModal';

const { Text, Title } = Typography;
const HotelDetailInformation = (props) => {

    return (
        <>
            <StyleCard title={'호텔 상세 정보'} >
                <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>편의시설 및 서비스</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>객실 정보</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>식사 정보</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>공인 등급</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>비즈니스 편의시설</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>주변 시설</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>기타 공사 정보</Title>
                    { props?.editMode ?
                        <DefaultTextArea />
                        :
                        ''
                    }
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={5} style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>서비스 지원 언어</Title>
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

export default HotelDetailInformation
