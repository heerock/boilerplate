import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Col, Row, Typography, Spin, Tabs, Descriptions} from 'antd';
import styled from "styled-components";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";


const { Text } = Typography;

const ReservationManage = () => {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <StyleDescriptions title={'예약 관리'} bordered>
                            <StyleDescriptions.Item className={'firstLabel'} label={'공통'} span={3}>
                                <Row gutter={[8, 8]}>
                                    <DefaultButton
                                        text={'알림톡 전송내역 확인'}
                                        style={{ background: '#6DAE60', marginRight: '0.225rem' }}
                                    />
                                    <DefaultButton
                                        text={'예약 취소'}
                                        style={{ background: '#D9534F', marginRight: '0.225rem' }}
                                    />
                                    <DefaultButton text={'고객 이슈 입력'}/>
                                </Row>
                            </StyleDescriptions.Item>

                            <StyleDescriptions.Item label={'호텔'} span={3}>
                                <Row gutter={[8, 8]}>
                                    <DefaultButton
                                        text={'바우처 다운로드'}
                                        style={{ marginRight: '0.225rem' }}
                                    />
                                    <DefaultButton
                                        text={'고객 정보 변경'}
                                        style={{ marginRight: '0.225rem' }}
                                    />
                                    <DefaultButton
                                        text={'정산 이슈 입력'}
                                        style={{
                                            background: 'linear-gradient(0deg, #F0910A, #F0910A), linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 150, 0, 0.4) 100%)',
                                        }}
                                    />
                                </Row>
                            </StyleDescriptions.Item>

                            <StyleDescriptions.Item label={'렌트카'} span={3}>
                                <Row gutter={[8, 8]}>
                                    <DefaultButton
                                        text={'렌트카 예약관리'}
                                    />
                                </Row>
                            </StyleDescriptions.Item>

                        </StyleDescriptions>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ReservationManage;

export const StyleDescriptions = styled(Descriptions)`
  width: 100%;
  
  .ant-descriptions-header {
    margin-bottom: 0.225rem;
  }
  
    tr {
      th {
        font-weight: bold;
      }
    }

  .firstLabel {
    border-top: 2px solid #000;
  }
  
  .ant-descriptions-item-label {
    width: 10%;
    padding: 10px 24px !important;
  }
  .ant-descriptions-item-content {
    padding: 10px 24px !important;
  }
`

