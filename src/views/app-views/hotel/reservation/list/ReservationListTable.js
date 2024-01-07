import React, { useState } from 'react';
import { Col, Row, Typography, Table } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';

const { Text } = Typography;

const ReservationListTable = (props) => {
    const [column, setColumn] = useState([
        {
            title: '예약번호',
            dataIndex: 'reservationId',
            align: 'center',
            render: (id, record) => {
                return (
                    <>
                        <Link to={`/app/hotel/reservation/${id}`}>
                            <Text style={{margin: '0 auto'}}>{id}</Text>
                        </Link>
                    </>
                )
            }
        },
        {
            title: '예약자명',
            dataIndex: 'userName',
            align: 'center',
            render: (userName, record) => {
                return (
                    <>
                        <Text style={{margin: '0 auto'}}>{userName}</Text>
                    </>
                )
            }
        },
        {
            title: '예약일',
            dataIndex: '',
            align: 'center',
            render: (_, record) => {
                return (
                    <>
                        <Text style={{margin: '0 auto'}}>{record.startDate} ~ {record.endDate}</Text>
                    </>
                )
            }
        },
        {
            title: '결제금액',
            dataIndex: '',
            align: 'center',
            render: (_, record) => {
                return (
                    <>
                        <Text style={{margin: '0 auto'}}>{record.paymentPrice.toLocaleString('ko-KR')} 원</Text>
                    </>
                )
            }
        },
        {
            title: '상태',
            dataIndex: 'status',
            align: 'center',
            render: (status, record) => {
                return (
                    <>
                        <Text style={{margin: '0 auto'}}>{status}</Text>
                    </>
                )
            }
        },

    ]);
    const [data, setData] = useState([
        {reservationId: '123415', userName: '테스트', userIdx: 1231, paymentPrice: 1318925, startDate: '2024-04-01', endDate: '2024-04-03', status: '예약확정'}
    ]);

	return (
		<>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Text>총 {props.data ? props.data.length : 0}개</Text>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Table columns={column} dataSource={data} />
				</Col>
		</>
	)
}

export default ReservationListTable
