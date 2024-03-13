import React from 'react';
import {Col, Row, Typography} from 'antd';
import DefaultButton from '../Button/DefaultButton';
import FamilyLoungeBadgeDiv from '../Div/FamilyLoungeBadgeDiv';
import DefaultDivider from '../Divider/DefaultDivider';
import {ADMIN_HOST} from '../../../../configs/HostConfig';
import UserAuthBadgeDiv from "../Div/UserAuthBadgeDiv";

const { Text } = Typography;

const ReservationUserInformationColumn = (props) => {
    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[0, 0]} style={{ textAlign: 'left' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text style={{ float: 'left', fontSize: '0.805rem', marginRight: '0.325rem' }}>예약번호 :</Text>
                        <Text style={{ float: 'left', fontWeight: 'bold', fontSize: '0.805rem' }}>{props.reservationNumber}</Text>
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <DefaultButton
                            type={'link'}
                            href={`${ADMIN_HOST}/carmore/AppUser?sp=tul_id&sv=${props.user.email}`}
                            color={'#5b9af3'}
                            text={props.user.email}
                            style={{ float: 'left', paddingLeft: 0, fontSize: '0.825rem', background: 'none' }}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginTop: '0.125rem', height: '1.2rem' }}>
                        {
                            props.user.email !== '' &&
                            <FamilyLoungeBadgeDiv status={props.user.grade} style={{ float: 'left', marginRight: '0.425rem', height: '1.2rem' }}/>
                        }
                        {/*<UserAuthBadgeDiv status={'SUCCESS'} style={{ float: 'left',  width: '3rem' }}/>*/}
                    </Col>
                    <DefaultDivider />
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ height: '5.3rem' }}>
                        <Row>
                            <Text style={{ fontSize: '0.825rem', fontWeight: 'bold' }}>고객 이슈</Text>
                        </Row>
                        <Row>
                            <Text style={{ fontSize: '0.825rem' }}>{props.customerIssue}</Text>
                        </Row>
                    </Col>
                    {/*<DefaultDivider />*/}
                    {/*<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>*/}
                    {/*    <Text style={{ fontSize: '0.825rem', fontWeight: '600' }}>{reservationHotel.booker.phoneNumber}</Text>*/}
                    {/*</Col>*/}
                </Row>
            </Col>
        </>
    )
}

export default ReservationUserInformationColumn
