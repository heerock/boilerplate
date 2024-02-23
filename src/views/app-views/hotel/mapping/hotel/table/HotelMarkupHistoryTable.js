import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import MarkupRangeColumn from "../../../../../../components/shared-components/hotel/LogColumns/MarkupRangeColumn";
import MarkupChangeHistoryColumn
    from "../../../../../../components/shared-components/hotel/LogColumns/MarkupChangeHistoryColumn";

const { Text } = Typography;

const HotelMarkupHistoryTable = (props) => {
    const [columns, setColumns] = useState([
        {
          title: '분류', 
          dataIndex: 'category',
          align: 'center',
          render: (category) => {
            const categoryEnum = {
                MAPPING: '매핑',
                MODIFY: '수정',
                SALE: '판매'
            }

            return (
                <>
                    <Text>{categoryEnum[category]}</Text>
                </>
            )
          }
        },
        { 
          title: '적용 범위',
          dataIndex: 'range',
          align: 'center',
          render: (_, record) => {
            return (
                <>
                    <MarkupRangeColumn record={record}/>
                </>
            )
          }
        },
        {
            title: '변경 상태',
            dataIndex: 'mappedHotel',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <MarkupChangeHistoryColumn record={record} />
                  </>
              )
            }
        },
        {
            title: '수정자', 
            dataIndex: 'adminEmail',
            align: 'center',
            render: (adminEmail, record) => {
              return (
                  <>
                      <Text>{adminEmail}</Text>
                  </>
              )
            }
        },
        { 
            title: '수정일', 
            dataIndex: 'createdAt',
            align: 'center',
            render: (createdAt, record) => {
              return (
                  <>
                      <Text>{moment(createdAt).add(9, 'hours').format('YYYY-MM-DD HH:mm:ss')}</Text>
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
                        rowKey={'id'}
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

export default HotelMarkupHistoryTable
