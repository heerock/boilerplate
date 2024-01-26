import React, { useState } from 'react';
import { Col, Row, Collapse, Typography, DatePicker, Space, Divider } from 'antd';
import styled from 'styled-components';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultSelect from 'components/shared-components/hotel/Select/DefaultSelect';
import DefaultSearch from 'components/shared-components/hotel/Search/DefaultSearch';
import DefaultDatePicker from "../../../../../components/shared-components/hotel/DatePicker/DefaultDatePicker";

const { Text } = Typography;
const { Panel } = Collapse;

const SearchFilter = () => {

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Collapse style={{ backgroundColor: '#FFF' }} defaultActiveKey={['']} ghost>
                    <Panel header="검색 조건" key="1" style={{ padding: '1rem !important' }}>
                        <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                                <DefaultSelect
                                    placeholder={'예약번호'}
                                    style={{ width: '100%' }}
                                    />
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
                                <DefaultSearch
                                    placeholder="검색조건 입력"
                                    style={{
                                        width: `100%`,
                                    }}
                                    />
                            </Col>
                        </Row>
                        {/* <Divider/> */}
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.854rem' }}>
                            <StyleLabel>예약일</StyleLabel>
                            <DefaultDatePicker />

                            <StyleLabel style={{marginLeft: '1.5rem'}}>취소일</StyleLabel>
                            <DefaultDatePicker />

                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>투숙일</StyleLabel>
                            <Space>
                                <DefaultDatePicker />
                                <Text>~</Text>
                                <DefaultDatePicker />
                            </Space>
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>지역</StyleLabel>
                            <DefaultCheckbox
                                text={'국내'}
                            />

                            <DefaultCheckbox
                                text={'해외'}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>종류</StyleLabel>
                            <DefaultCheckbox
                                text={'패키지'}
                            />
                        </Row>
                        <Divider/>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>전체 결제 상태</StyleLabel>
                            <DefaultCheckbox
                                text={'예약확정전'}
                            />

                            <DefaultCheckbox
                                text={'예약확정'}
                            />
                            <DefaultCheckbox
                                text={'부분이용완료'}
                            />
                            <DefaultCheckbox
                                text={'이용완료'}
                            />
                            <DefaultCheckbox
                                text={'결제취소'}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>호텔 예약 상태</StyleLabel>
                            <DefaultCheckbox
                                text={'예약확정'}
                            />
                            <DefaultCheckbox
                                text={'이용완료'}
                            />
                            <DefaultCheckbox
                                text={'결제취소'}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>차량 예약 상태</StyleLabel>
                            <DefaultCheckbox
                                text={'예약대기'}
                            />
                            <DefaultCheckbox
                                text={'예약확정전'}
                            />
                            <DefaultCheckbox
                                text={'예약확정'}
                            />
                            <DefaultCheckbox
                                text={'대여중'}
                            />
                            <DefaultCheckbox
                                text={'반납'}
                            />
                            <DefaultCheckbox
                                text={'결제취소'}
                            />
                        </Row>
                    </Panel>
                </Collapse>
            </Col>
		</>
	)
}

export const StyleLabel = styled(Text)`
    font-weight: bold;
    margin-right: 1rem;
`

export default SearchFilter
