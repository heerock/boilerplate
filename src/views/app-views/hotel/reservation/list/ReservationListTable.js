import React, { useState, useEffect } from 'react';
import { Col, Row, Typography, Table } from 'antd';
import {Link, useHistory} from 'react-router-dom';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import DefaultTable from '../../../../../components/shared-components/hotel/Table/DefaultTable';
import ReservationStatusColumns
    from '../../../../../components/shared-components/hotel/HotelReservationColumns/ReservationStatusColumn';
import ReservationUserInformationColumn
    from '../../../../../components/shared-components/hotel/HotelReservationColumns/ReservationUserInformationColumn';
import ReservationHotelInformationColumn
    from '../../../../../components/shared-components/hotel/HotelReservationColumns/ReservationHotelInformationColumn';
import ReservationPaymentColumn
    from '../../../../../components/shared-components/hotel/HotelReservationColumns/ReservationPaymentColumn';

const ReservationListTable = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [column, setColumn] = useState([
        {
            title: '예약번호',
            dataIndex: 'reservationId',
            align: 'center',
            width: '10%',
            render: (id, record) => {
                return (
                    <>
                        <ReservationStatusColumns {...record} onClick={onClickDetail} />
                    </>
                )
            }
        },
        {
            title: '예약자 정보',
            dataIndex: 'userName',
            align: 'center',
            width: '15%',
            render: (userName, record) => {
                return (
                    <>
                        <ReservationUserInformationColumn {...record} />
                    </>
                )
            }
        },
        {
            title: '호텔 숙박정보',
            dataIndex: '',
            align: 'center',
            width: '25%',
            render: (_, record) => {
                return (
                    <>
                        <ReservationHotelInformationColumn {...record} />
                    </>
                )
            }
        },
        {
            title: '차량 대여정보',
            dataIndex: '',
            align: 'center',
            width: '25%',
            render: (_, record) => {
                return (
                    <>
                        {/*<Text style={{margin: '0 auto'}}>{record.paymentPrice.toLocaleString('ko-KR')} 원</Text>*/}
                    </>
                )
            }
        },
        {
            title: '결제금액',
            dataIndex: 'status',
            align: 'center',
            render: (status, record) => {
                return (
                    <>
                        <ReservationPaymentColumn {...record} />
                    </>
                )
            }
        },
    ]);

    const onClickDetail = (reservationNumber) => {
        history.push(`/app/hotel/reservation/${reservationNumber}`)
    }

    useEffect(() => {
        setData(props.data)
    }, [props.data])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <DefaultTable bordered={true} pagination={true} totalCount={data.length} columns={column} data={data} />
            </Col>
		</>
	)
}

export default ReservationListTable
