import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Input, Card, Empty, Popconfirm} from 'antd';
import styled from 'styled-components';
import MasterHotelTable from './MasterHotelTable';
import MappedCard from "../../../../../components/shared-components/hotel/Card/MappedCard";
import MasterService from "../../../../../services/Master/MasterService";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";
const { Text } = Typography;
const { Search } = Input;
const MappedHotel = (props) => {
    const hotelKey = props.selectedVendorHotelKey ? props.selectedVendorHotelKey[0] : null;
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <StyleMappedCard
                    title={'매핑된 호텔'}
                    extra={
                        props.mappedHotel &&
                        <Popconfirm
                            placement="top"
                            title={'선택한 호텔 매핑을 해제시키겠습니까?'}
                            onConfirm={() => props.onClick(props.mappedHotel.id, hotelKey, 'delete')}
                            okText="확인"
                            cancelText="취소"
                        >
                            <DefaultButton
                                style={{
                                    background: '#e14114',
                                    width: '4rem',
                                    border: 'none',
                                    height: '1.5rem !important',
                                    lineHeight: '1.5rem !important',
                                    fontWeight: 'bold',
                                    fontSize: '0.775rem',
                                }}
                                text={'매핑취소'}
                            />
                        </Popconfirm>
                    }
                    bodyStyle={{ padding: '1.05rem 1.25rem'}}
                    headStyle={{ background: '#F9F9F9', color: '#666666', fontSize: '0.825rem' }}
                >
                    {props.mappedHotel ? <MappedCard mappedHotel={props.mappedHotel} selectedVendorHotelKey={props.selectedVendorHotelKey} /> :
                        <>
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={<Text style={{ fontSize: '0.825rem' }}>매핑된 호텔이 없습니다.</Text>}
                            />
                        </>
                    }
                </StyleMappedCard>
            </Col>
        </>
    )
}

export const StyleMappedCard = styled(Card)`
  background: #F9F9F9;
  border: unset;
`

export default MappedHotel
