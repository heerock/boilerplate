import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Col, Row, Typography, Spin, Tabs, Descriptions} from 'antd';
import styled from "styled-components";


const { Text } = Typography;

const ReservationDetailCar = () => {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <StyleDescriptions title={'렌트카 업체 주요정보'} bordered>
                                <StyleDescriptions.Item label={'업체명'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'주소'} span={3}>부산 동구 중앙대로214번길 3-4 1층</StyleDescriptions.Item>

                            <StyleDescriptions.Item label={'연락처'} span={2}>위드렌터카 부산역점</StyleDescriptions.Item>
                            <StyleDescriptions.Item label={'영업시간'} >위드렌터카 부산역점</StyleDescriptions.Item>

                            <StyleDescriptions.Item label={'대여규정'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                            <StyleDescriptions.Item label={'취소규정'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                        </StyleDescriptions>
                    </Row>
                    <Row>
                        <StyleDescriptionsSecond layout="vertical" bordered>
                            <StyleDescriptionsSecond.Item
                                label="가입 보험"
                            >
                            </StyleDescriptionsSecond.Item>
                        </StyleDescriptionsSecond>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ReservationDetailCar;

export const StyleDescriptions = styled(Descriptions)`
 width: 100%;
  tr {
    th {
      font-weight: bold;
    }
   
  }

  .ant-descriptions-item-label {
    padding: 10px 24px !important;
  }
  .ant-descriptions-item-content {
    padding: 10px 24px !important;
  }
`

export const StyleDescriptionsSecond = styled(Descriptions)`
  width: 100%;
  margin-top: 1rem;
 .ant-descriptions-item-label {
    width: 50%;
    background: #D8E9F5;
    text-align: center;
    font-weight: bold;
    height: 1rem;
 }

  .ant-descriptions-item-label {
    padding: 10px 24px !important;
  }
  .ant-descriptions-item-content {
    padding: 10px 24px !important;
  }
`


