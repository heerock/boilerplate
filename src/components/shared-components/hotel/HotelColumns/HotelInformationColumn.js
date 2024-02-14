import React, { useState, useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import AffiliatesBadgeDiv from "../Div/AffiliatesBadgeDiv";

const { Text } = Typography;

const HotelInformationColumn = (props) => {
    const { record } = props;

    return (
        <>

            <Col style={{ textAlign: 'left' }}>
                {
                    record?.similarityScore &&
                    <Col style={{ fontSize: '0.765rem', marginBottom: '0.225rem' }}>
                        <Text style={{ color: '#6C757D', marginRight: '0.275rem' }}>유사도 점수</Text><Text style={{ color: '#6C757D' }}>{record?.similarityScore}</Text>
                    </Col>
                }
                {
                    record?.mappedSupplierSystems &&
                        <Row gutter={[8, 8]}>
                            {
                                record.mappedSupplierSystems.map((vendor) =>
                                    <AffiliatesBadgeDiv
                                        key={vendor}
                                        style={{
                                            margin: 'unset',
                                            marginRight: '4px',
                                            padding: '0.1rem 0.305rem',
                                            fontSize: '0.665rem',
                                        }}
                                        channel={vendor}
                                    />
                                )
                            }
                        </Row>
                }
                <Row>
                    <StyleText>{`${record?.country?.name} ${record?.city ? ` > ${record.city.name}` : ''}`}</StyleText>
                </Row>
                <Row>
                    <StyleText>{`${record.name}`}</StyleText>
                </Row>
                <Row>
                    <StyleText>{record.phone && `T.${record.phone}`} / {record.fax && record.fax !== '0' && `F.${record.fax}`}</StyleText>
                </Row>
                <Row>
                    <StyleText>{record.address}</StyleText>
                </Row>
                <Row>
                    <StyleText>{`Grade: ${record.rating} STARS`}</StyleText>
                </Row>
            </Col>
        </>
    )
}

export default HotelInformationColumn

export const StyleText = styled(Text)`
  font-size: 0.785rem;
`
