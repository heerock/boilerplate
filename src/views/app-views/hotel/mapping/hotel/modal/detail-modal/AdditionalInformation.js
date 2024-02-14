import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Typography } from 'antd';
import DefaultTextArea from "../../../../../../../components/shared-components/hotel/Input/DefaultTextArea";
import {StyleCard} from "../HotelDetailModal";

const { Text, Title } = Typography;

const AdditionalInformation = (props) => {
    const [data, setData] = useState([
        { key: 'ISSUE_EXTRA', title: '추가 안내사항', description: ''},
        { key: 'FEE_OPTIONAL', title: '선택사항 요금', description: ''},
        { key: 'PETS', title: '반려동물', description: ''},
    ])

    useEffect(() => {
        if (props.policies) {
            props.policies.forEach((policy) => {
                setData((data) => {
                    return data.map((item) => {
                        if (item.key === policy.type) {
                            item.description = policy.description
                        }
                        return item;
                    })
                })
            })
        }
    }, [props.policies])

    useEffect(() => {

    })

    return (
        <>
            <StyleCard title={'부가 정보'} >
                <Row gutter={[16, 16]}>
                    {
                        data.map((item) =>
                            <Col key={item.key} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1.225rem' }}>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <div style={{ fontSize: '0.825rem' }} dangerouslySetInnerHTML={{ __html: item.description }} />
                                    </Col>
                                </Row>
                            </Col>
                        )
                    }

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1.225rem' }}>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontWeight: 'bold' }}>현장 결제 유형 및 수단</Text>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <div style={{ fontSize: '0.825rem' }} dangerouslySetInnerHTML={{ __html: props.onsitePaymentTypes }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </StyleCard>
        </>
    )
}

export default AdditionalInformation
