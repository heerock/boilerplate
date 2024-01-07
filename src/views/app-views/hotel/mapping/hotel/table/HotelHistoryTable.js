import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const HotelHistoryTable = (props) => {
    const [columns, setColumns] = useState([
        { 
          title: '번호', 
          dataIndex: 'seq',
          align: 'center',
          render: (number) => {
            return (
                <>
                    <Text style={{margin: '0 auto'}}>{number}</Text>
                </>
            )
          }
        },
        { 
          title: '분류', 
          dataIndex: 'historyType',
          render: (type, record) => {
            return (
                <>
                    <Text>{type}</Text>
                </>
            )
          }
        },
        { 
          title: '변경 상태', 
          dataIndex: 'status',
          align: 'center',
          render: (status) => {
            return (
                <>
                    <Text>{status}</Text>
                </>
            )
          }
        },
        { 
            title: '업체', 
            dataIndex: 'vendor',
            render: (vendor, record) => {
              return (
                  <>
                      <Text>{vendor}</Text>
                  </>
              )
            }
        },
        { 
            title: '호텔 코드', 
            dataIndex: 'hotelCode',
            render: (code, record) => {
              return (
                  <>
                      <Text>{code}</Text>
                  </>
              )
            }
        },
        { 
            title: '호텔명', 
            dataIndex: 'hotelName',
            render: (name, record) => {
              return (
                  <>
                      <Text>{name}</Text>
                  </>
              )
            }
        },
        { 
            title: '수정자', 
            dataIndex: 'updatedUser',
            render: (user, record) => {
              return (
                  <>
                      <Text>{user}</Text>
                  </>
              )
            }
        },
        { 
            title: '수정일', 
            dataIndex: 'updatedAt',
            render: (date, record) => {
              return (
                  <>
                      <Text>{date}</Text>
                  </>
              )
            }
        },
    ])
    const [data, setData] = useState([])

    useEffect(() => {
        setData(props.data);
    }, [props.data])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ marginTop: '1rem' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Text>총 {props.data ? props.data.length : 0}개</Text>
                    </Col>
                </Row>
                <Row>
                    <StyleTable
                        columns={columns}
                        dataSource={data && data}
                        style={{ width: `100%`}}
                    />
                </Row>
            </Col>
		</>
	)
}

export const StyleTable = styled(Table)`
    .ant-table-thead > tr > th {
        background: #D8E9F5 !important;
        text-align: center;
    }
`
export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.channel === 'HG' && '#76BEDB'};
  color: #FFF;
  width: 30%;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
`

export default HotelHistoryTable
