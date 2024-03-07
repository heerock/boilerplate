import React, { useState } from 'react';
import { Col, Row, Collapse, Typography, DatePicker, Space, Divider } from 'antd';
import styled from 'styled-components';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultSelect from 'components/shared-components/hotel/Select/DefaultSelect';
import DefaultSearch from 'components/shared-components/hotel/Search/DefaultSearch';
import DefaultDatePicker from "../../../../../components/shared-components/hotel/DatePicker/DefaultDatePicker";

const { Text } = Typography;
const { Panel } = Collapse;

const SearchFilter = (props) => {
    const onChangeHotelReservationStatus = (e, value) => {
        const arr = [...props.searchHotelStatuses]
        if (e.target.checked) {
            props.setSearchHotelStatuses([...arr, value])
        } else {
            props.setSearchHotelStatuses(arr.filter((el) => el !== value))
        }
    }

    const onChangeFullStatus = (e, value) => {
        const arr = [...props.fullStatuses]
        if (e.target.checked) {
            props.setFullStatuses([...arr, value])
        } else {
            props.setFullStatuses(arr.filter((el) => el !== value))
        }
    }

    const onChangeCarReservationStatus = (e, value) => {
        const arr = [...props.carStatuses]
        if (e.target.checked) {
            props.setCarStatuses([...arr, value])
        } else {
            props.setCarStatuses(arr.filter((el) => el !== value))
        }
    }

    const onChangeIsPackage = (e) => {
        props.setIsPackage(e.target.checked);
    }

    const onChangeCustomerIssueExist = (e) => {
        props.setCustomerIssueExist(e.target.checked);
    }

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Collapse style={{ backgroundColor: '#FFF' }} defaultActiveKey={['']} ghost>
                    <Panel header="검색 조건" key="1" style={{ padding: '1rem !important' }}>
                        <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                                <DefaultSelect
                                    options={props.filterOptions}
                                    value={props.filterValue}
                                    setSelectedKey={props.setFilterValue}
                                    placeholder={'예약번호'}
                                    style={{ width: '100%' }}
                                />
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
                                <DefaultSearch
                                    onSearch={props.onSearch}
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
                            <DefaultDatePicker date={props.paymentDate} setDate={props.setPaymentDate} />

                            <StyleLabel style={{marginLeft: '1.5rem'}}>취소일</StyleLabel>
                            <DefaultDatePicker date={props.cancelDate} setDate={props.setCancelDate}/>

                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>투숙일</StyleLabel>
                            <Space>
                                <DefaultDatePicker date={props.checkInDate} setDate={props.setCheckInDate}/>
                                <Text>~</Text>
                                <DefaultDatePicker date={props.checkOutDate} setDate={props.setCheckOutDate}/>
                            </Space>
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>지역</StyleLabel>
                            <DefaultSelect
                                value={props.searchRegion}
                                setSelectedKey={props.setSearchRegion}
                                options={[
                                    { label: '모두', value: 'ALL' },
                                    { label: '국내', value: 'DOMESTIC' },
                                    { label: '해외', value: 'OVERSEAS' },
                                ]}
                                placeholder={'모두'}
                                style={{ width: '8%', marginLeft: '0.8rem' }}
                            />
                        </Row>
                        <Divider/>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>전체 결제 상태</StyleLabel>
                            <DefaultCheckbox
                                onChange={(e) => onChangeFullStatus(e, 'FAILED')}
                                text={'예약 실패'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeFullStatus(e, 'CONFIRMING')}
                                text={'예약확정중'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeFullStatus(e, 'CONFIRMED')}
                                text={'예약확정'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeFullStatus(e, 'COMPLETE')}
                                text={'이용완료'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeFullStatus(e, 'CANCELED')}
                                text={'취소/환불'}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>호텔 예약 상태</StyleLabel>
                            <DefaultCheckbox
                                onChange={(e) => onChangeHotelReservationStatus(e, 'CONFIRM_FAILED')}
                                text={'결제 후 예약 확정 실패'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeHotelReservationStatus(e, 'CONFIRMED')}
                                text={'예약완료'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeHotelReservationStatus(e, 'FREE_CANCEL')}
                                text={'취소완료'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeHotelReservationStatus(e, 'PENALTY_CANCEL')}
                                text={'취소수수료'}
                            />
                        </Row>
                        <Row gutter={[8, 8]} style={{ alignItems: 'baseline', marginTop: '0.454rem' }}>
                            <StyleLabel>차량 예약 상태</StyleLabel>
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'BEFORE_PAYMENT')}
                                text={'카드결제전'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'RESERVED')}
                                text={'예약확정전'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'CONFIRMED')}
                                text={'예약확정'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'USING')}
                                text={'대여중'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'RETURN')}
                                text={'반납'}
                            />
                            <DefaultCheckbox
                                onChange={(e) => onChangeCarReservationStatus(e, 'CANCELED')}
                                text={'결제취소'}
                            />
                        </Row>
                        <Row gutter={[0, 0]} style={{ alignItems: 'baseline', marginTop: '0.454rem', fontWeight: 'bold'}}>
                            <DefaultCheckbox
                                onChange={onChangeIsPackage}
                                checked={props.isPackage}
                                text={'호텔+렌트카만 보기'}
                            />
                            <DefaultCheckbox
                                onChange={onChangeCustomerIssueExist}
                                checked={props.customerIssueExist}
                                text={'고객 이슈 건만 보기'}
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
