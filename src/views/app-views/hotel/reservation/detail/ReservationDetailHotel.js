import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Col, Row, Typography, Spin, Tabs, Descriptions} from 'antd';
import {SelectOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";


const { Text } = Typography;

const ReservationDetailHotel = (props) => {
    const { record } = props;
    console.log('record : ', record)
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <DefaultButton
                            style={{
                                fontSize: '0.725rem',
                                // margin: '0 auto',
                                // background: '#FFF',
                                backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                            }}
                            onClick={() => props.onClick(record?.reservationHotel)}
                            prefixIcons={<SelectOutlined />}
                            color={'#000'}
                            text={'호텔 상세보기'}
                        />
                    </Row>
                    <Row style={{ marginTop: '1rem' }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <StyleDescriptions layout="vertical" bordered>
                                <StyleDescriptions.Item
                                    label="공급사 취소규정"
                                >
                                    <Row>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>이 요금은 환불되지 않습니다.</Text>
                                    </Row>
                                    <Row>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>
                                            예약을 변경하거나 취소하실 경우 환불 또는 향후 숙박에 사용할 수 있는 크레딧이 제공되지 않습니다. 이 정책은 코로나19에 관계 없이 적용됩니다.
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>
                                            정해진 시간보다 늦게 체크인하거나 일찍 체크아웃하실 경우 환불되지 않습니다.
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>·</Text>
                                        <Text style={{ float: 'left', fontSize: '0.765rem' }}>
                                            숙박을 연장하려면 새로 예약하셔야 합니다.
                                        </Text>
                                    </Row>
                                </StyleDescriptions.Item>
                                <StyleDescriptions.Item
                                    label="호텔모아 취소규정"
                                    column ={{ xs: 12, sm: 12, md: 12 }}
                                >
                                    호텔모아 취소규정
                                </StyleDescriptions.Item>
                            </StyleDescriptions>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ReservationDetailHotel


export const StyleDescriptions = styled(Descriptions)`
  .ant-descriptions-item-label {
    width: 50%;
    background: #D8E9F5;
    text-align: center;
    font-weight: bold;
  }
`
