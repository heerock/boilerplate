import React, {useState, useEffect, useMemo} from 'react';
import { Col, Row, Tabs, typo, Typography } from 'antd';
import DefaultTextArea from '../../../../../../../components/shared-components/hotel/Input/DefaultTextArea';
import { StyleCard } from '../HotelDetailModal';

const { Text, Title } = Typography;

const HotelDetailInformation = (props) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [data, setData] = useState([
        { key: 'AMENITY', title: '편의시설 및 서비스', description: ''},
        { key: 'ROOMS', title: '객실 정보', description: ''},
        { key: 'DINING', title: '식사 정보', description: ''},
        { key: 'NATIONAL_RATINGS', title: '공인 등급', description: ''},
        { key: 'AMENITIES_BUSINESS', title: '비지니스 편의시설', description: ''},
        { key: 'ATTRACTIONS', title: '주변시설', description: ''},
        { key: 'LOCATION', title: '위치', description: ''},
        { key: 'LOCATION_HEADLINE', title: '위치 헤드라인', description: ''},
        { key: 'RENOVATIONS', title: '기타 공사 정보', description: ''},
    ])

    useEffect(() => {
        if (props.information) {
            props.information.forEach((facility) => {
                setData((data) => {
                    return data.map((item) => {
                        if (item.key === facility.category) {
                            item.description = facility.description
                        }
                        return item;
                    })
                })
            })
        }
    }, [props.information])

    useEffect(() => {
        if ('editMode' in props) {
            setIsEditMode(props.editMode)
        }
    }, [props?.editMode])

    const InformationContent = useMemo(() => {
        return (
            <>
                {
                    data.length > 0 &&
                    data.map((item) =>
                        <Col key={item.key} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1rem' }}>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    { isEditMode ?
                                        <DefaultTextArea />
                                        :
                                        <div style={{ fontSize: '0.825rem' }} dangerouslySetInnerHTML={{ __html: item.description }} />
                                    }
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            </>
        )
    }, [data, isEditMode]);


    return (
        <>
            <StyleCard title={'호텔 상세 정보'} >
                <Row gutter={[16, 16]}>
                    {InformationContent}

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: '1rem' }}>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Text style={{ fontWeight: 'bold' }}>서비스 지원 원어</Text>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                { props?.editMode ?
                                    <DefaultTextArea />
                                    :
                                    <div style={{ fontSize: '0.825rem' }} dangerouslySetInnerHTML={{ __html: props?.languages }} />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </StyleCard>
        </>
    )
}

export default HotelDetailInformation
