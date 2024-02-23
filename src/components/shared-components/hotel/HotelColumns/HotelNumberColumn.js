import React, { useState, useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from '../Div/AffiliatesBadgeDiv';
import DefaultButton from '../Button/DefaultButton';
import { SelectOutlined } from '@ant-design/icons';
import TypeBadgeDiv from "../Div/TypeBadgeDiv";

const { Text } = Typography;

const HotelNumberColumn = (props) => {
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 2]}>
                    {props.isSelfSale && <TypeBadgeDiv type={'SELF_SALE'}/>}
                    <AffiliatesBadgeDiv channel={props.channel} text={props.channel} />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>{props.hotelCode}</Text>
                        {props?.originCode
                        &&
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '-0.1rem' }}>
                                <Text style={{ fontSize: '0.705rem', margin: '0 auto' }}>{props.originCode}</Text>
                            </Col>
                        }
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <DefaultButton
                            style={{
                                fontSize: '0.725rem',
                                margin: '0 auto',
                                // background: '#FFF',
                                backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                            }}
                            onClick={props.onClick}
                            prefixIcons={<SelectOutlined />}
                            color={'#000'}
                            text={'상세보기'}
                        />
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default HotelNumberColumn
