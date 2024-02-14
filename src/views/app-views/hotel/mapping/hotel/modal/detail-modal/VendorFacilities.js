import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Typography } from 'antd';

const { Text, Title } = Typography;

const VendorFacilities = (props) => {
    const [data, setData] = useState([
        { key: 'AMENITY', title: '객실비품', descriptions: []},
        { key: 'HOTEL', title: '부대시설', descriptions: []},
        { key: 'SERVICES', title: '서비스', descriptions: []},
        { key: 'ETC', title: '기타', descriptions: []},
        { key: 'UCC', title: '사용가능 신용카드', descriptions: []},
        { key: 'SRD', title: '주변시설', descriptions: []},
        { key: 'Sports', title: '스포츠시설', descriptions: []},
    ])

    useEffect(() => {
        if (props.facilities) {
            props.facilities.forEach((facility) => {
                setData((data) => {
                    return data.map((item) => {
                        if (item.key === facility.category) {
                            item.descriptions = facility.descriptions
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
            <Card style={{ background: '#F8F8F8' }}>
                <Row gutter={[8, 8]}>
                {
                    data.map((item) =>
                        <Col key={item.key} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1rem' }}>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                {item.descriptions.length > 0 && item.descriptions.join(', ')}
                                </Col>
                            </Row>
                        </Col>
                    )
                }
                </Row>
            </Card>
        </>
    )
}

export default VendorFacilities
