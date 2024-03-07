import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from '../Div/AffiliatesBadgeDiv';
import DefaultButton from '../Button/DefaultButton';
import { SelectOutlined } from '@ant-design/icons';
import TypeBadgeDiv from "../Div/TypeBadgeDiv";
import ReservationBadgeDiv from "../Div/ReservationBadgeDiv";
import PackageBadgeDiv from "../Div/PackageBadgeDiv";
import OverSeasValidateBadgeDiv from "../Div/OverSeasValidateBadgeDiv";

const { Text } = Typography;

const ReservationStatusColumn = (props) => {

    const { reservationHotel, reservationCar } = props;

    if (reservationHotel && reservationCar) {

    }

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 4]}>
                    {/*<TypeBadgeDiv type={'SELF_SALE'}/>*/}
                    <Row gutter={[4, 4]} style={{ margin: '0 auto'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <OverSeasValidateBadgeDiv status={props.isDomestic ? 'DOMESTIC' : 'OVERSEAS'} />
                        </Col>
                        {props.isPackage &&
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <PackageBadgeDiv />
                            </Col>
                        }
                    </Row>
                    {/*<ReservationBadgeDiv style={{ float: 'left' }} status={props.status}/>*/}
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ fontSize: '0.825rem', margin: '0 auto', fontWeight: 'bold' }}>{props.reservationNumber}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        {
                            moment(props.paymentDate).add(9, 'hours').format('YYYY-MM-DD HH:mm:ss')
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
                            onClick={() => props.onClick(props.reservationNumber)}
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

export default ReservationStatusColumn
