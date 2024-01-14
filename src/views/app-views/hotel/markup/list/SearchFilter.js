import React, { useState } from 'react';
import { Col, Row, Collapse, Typography, DatePicker, Space, Divider } from 'antd';
import styled from 'styled-components';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultSelect from 'components/shared-components/hotel/Select/DefaultSelect';
import DefaultSearch from 'components/shared-components/hotel/Search/DefaultSearch';

const { Text } = Typography;
const { Panel } = Collapse;

const SearchFilter = () => {

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    placeholder={'=== 국가 선택 ==='}
                                    style={{ width: '100%' }}
                                />
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    placeholder={'=== 도시 선택 ==='}
                                    style={{
                                        width: `100%`,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{ marginTop: '0.425rem' }}>
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                                <DefaultSelect
                                    placeholder={'공급업체 호텔코드'}
                                    style={{ width: '100%' }}
                                />
                            </Col>
                            <Col xs={21} sm={21} md={21} lg={21} xl={21} xxl={21}>
                                <DefaultSearch 
                                    placeholder={'호텔 정보를 검색해주세요.'}
                                />
                            </Col>
                        </Row>
            </Col>
		</>
	)
}

export const StyleLabel = styled(Text)`
    font-weight: bold;
    margin-right: 1rem;
`

export default SearchFilter
