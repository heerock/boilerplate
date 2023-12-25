import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';
import MappingHotel from './MappingHotel';

const { Text } = Typography;

const MasterHotelTable = (props) => {
    const [columns, setColumns] = useState([
        { 
          title: '마스터 호텔코드', 
          dataIndex: 'masterHotelCode',
          align: 'center',
          render: (_, record) => {
            console.log('record : ', record)
            return (
                <>
                    <Col>
                        <Row>
                            <StyleBadgeDiv channel={record.channel}>{record.channel}</StyleBadgeDiv>
                        </Row>
                        <Row>
                            <Text style={{margin: '0 auto'}}>{record.masterHotelCode}</Text>
                        </Row>
                        <Row>
                            <Button style={{margin: '0 auto'}}>상세보기</Button>
                        </Row>
                    </Col>
                </>
            )
          }
        },
        { title: '마스터 호텔 정보', dataIndex: 'masterHotelInfo' },
        { title: '최종 수정 이력', dataIndex: 'updatedAt' },
    ])
    const [data, setData] = useState([])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
    };

    useEffect(() => {
        setData(props.data);
    }, [])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                        <Text>총 {props.data ? props.data.length : 0}개</Text>
                </Row>
                <Row>
                    <StyleTable
                        rowSelection={{
                            type: `radio`,
                            ...rowSelection,
                        }}
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

export default MasterHotelTable
