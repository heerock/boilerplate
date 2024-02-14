import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Typography } from 'antd';

const { Text, Title } = Typography;

const MasterFacilities = (props) => {
    const [data, setData] = useState([
        { key: 'HOTEL_INTERNET', title: '인터넷', descriptions: []},
        { key: 'HOTEL_PARKING', title: '주차 및 교통', descriptions: []},
        { key: 'HOTEL_DRINK', title: '식사 및 음료', descriptions: []},
        { key: 'HOTEL_FACILITIES', title: '편의시설', descriptions: []},
        { key: 'HOTEL_RECEPTION', title: '리셉션 서비스', descriptions: []},
        { key: 'HOTEL_FITNESS', title: '웰빙 및 파트너스', descriptions: []},
        { key: 'HOTEL_ACTIVITY', title: '액티비티', descriptions: []},
        { key: 'HOTEL_KIDS', title: '키즈', descriptions: []},
        { key: 'HOTEL_BUSINESS', title: '비지니스', descriptions: []},
        { key: 'HOTEL_DISABLED_FACILITIES', title: '장애인 편의시설', descriptions: []},
        { key: 'HOTEL_ETC', title: '기타', descriptions: []},
    ])

    useEffect(() => {
        if (props.facilities) {
            props.facilities.forEach((facility) => {
                setData((data) => {
                    return data.map((item) => {
                        if (item.key === facility.category) {
                            item.descriptions = facility.description
                        }
                        return item;
                    })
                })
            })
        }
    }, [props.facilities])

    useEffect(() => {

    })

    return (
        <>
            <Row gutter={[4, 4]}>
            {
                data.map((item) =>
                    <Col key={item.key} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1.225rem' }}>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontSize: '0.825rem' }}>{item.descriptions.length > 0 && item.descriptions.join(', ')}</Text>
                            </Col>
                        </Row>
                    </Col>
                )
            }
            </Row>
        </>
    )
}

export default MasterFacilities
