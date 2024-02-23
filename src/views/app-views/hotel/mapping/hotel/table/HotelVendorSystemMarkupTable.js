import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import MarkupRangeColumn from "../../../../../../components/shared-components/hotel/LogColumns/MarkupRangeColumn";
import MarkupChangeHistoryColumn
    from "../../../../../../components/shared-components/hotel/LogColumns/MarkupChangeHistoryColumn";
import DefaultTable from "../../../../../../components/shared-components/hotel/Table/DefaultTable";
import HotelMarkupColumn from "../../../../../../components/shared-components/hotel/HotelColumns/HotelMarkupColumn";

const { Text } = Typography;

const HotelVendorSystemMarkupTable = (props) => {
    const [columns, setColumns] = useState([
        {
          title: '공급처',
          dataIndex: 'supplierSystem',
          align: 'center',
          render: (supplierSystem) => {
            return (
                <>
                    <Text>{supplierSystem}</Text>
                </>
            )
          }
        },
        { 
          title: '마크업 비율',
          dataIndex: 'range',
          align: 'center',
          render: (_, record) => {
            return (
                <>
                    <HotelMarkupColumn record={record} onClick={props.onClick} />
                </>
            )
          }
        },
        {
            title: '최종 수정 이력',
            dataIndex: 'createdAt',
            align: 'center',
            render: (createdAt, record) => {
              return (
                  <>
                      {
                       record?.log &&
                          <Row gutter={[0, 2]}>
                            <Text>{record.log?.email}</Text>
                            <Text>{moment(record.log?.updatedAt).add(9, 'hours').format('YYYY-MM-DD HH:mm:ss')}</Text>
                          </Row>
                      }
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
                <Row>
                    <DefaultTable
                        totalCount={data.length}
                        pagination={false}
                        columns={columns}
                        data={data && data}
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

export default HotelVendorSystemMarkupTable
