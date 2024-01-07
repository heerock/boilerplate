import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';
import MappingHotel from './MappingHotel';
import VendorHotelDetailModal from './modal/VendorHotelDetailModal';
import {StyleCheckbox} from "./VendorHotel";
import HotelHistoryModal from './modal/HotelHistoryModal';

const { Text } = Typography;

const VendorHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedHotelKey, setSelectedHotelKey] = useState(null);
    const detailViewOnClick = (id) => {
        setSelectedHotelKey(id)
        setIsModalOpen(!isModalOpen)
    }

    const historyModalOnClick = () => {
        setIsHistoryModalOpen(!isHistoryModalOpen);
    }

    const [columns, setColumns] = useState([
        { 
          title: '공급처 호텔코드', 
          dataIndex: 'vendorHotelCode',
          align: 'center',
          render: (_, record) => {
            return (
                <>
                    <Col>
                        <Row>
                            <StyleBadgeDiv channel={record.channel}>{record.channel}</StyleBadgeDiv>
                        </Row>
                        <Row>
                            <Text style={{margin: '0 auto'}}>{record.vendorHotelCode}</Text>
                        </Row>
                        <Row>
                            <Button 
                                style={{margin: '0 auto'}}
                                onClick={() => detailViewOnClick(record.vendorHotelCode)}
                            >
                                상세보기
                            </Button>
                        </Row>
                    </Col>
                </>
            )
          }
        },
        { 
          title: '공급처 호텔 정보', 
          dataIndex: 'vendorHotelInfo',
          render: (_, record) => {
            return (
                <>
                    <Col>
                        <Row>
                            <Text>{`${record.country} > ${record.cityName}`}</Text>
                        </Row>
                        <Row>
                            <Text>{`${record.hotelName}`}</Text>
                        </Row>
                        <Row>
                            <Text>{`T.${record.tel} / F.${record.fax}`}</Text>
                        </Row>
                        <Row>
                            <Text>{record.address}</Text>
                        </Row>
                        <Row>
                            <Text>{`Grade: ${record.grade} STARS`}</Text>
                        </Row>
                    </Col>
                </>
            )
          }
        },
        { 
          title: '최종 수정 이력', 
          dataIndex: 'updatedAt',
          align: 'center',
          render: (_, record) => {
            return (
                <>
                    <Col style={{display: 'inline-grid'}}>
                        <Row>
                            {record.updatedId}        
                        </Row>
                        <Row>
                            {record.updatedAt}        
                        </Row>
                        <Row>
                            <Button 
                                style={{margin: '0 auto'}} 
                                type="link"
                                onClick={() => historyModalOnClick()}
                            >
                                [ 기록보기 ]
                            </Button>
                        </Row>
                    </Col>
                </>
            )
          }
        },
    ])
    const [data, setData] = useState([])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            props.setSelectedVendorHotelKey(selectedRows[0])
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          name: record.name,
        }),
    };

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
            <VendorHotelDetailModal 
                isModalOpen={isModalOpen} 
                selectedHotelKey={selectedHotelKey}
                setIsModalOpen={setIsModalOpen}
            />
            <HotelHistoryModal 
                isModalOpen={isHistoryModalOpen}
                setIsModalOpen={setIsHistoryModalOpen}
            />
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

export default VendorHotelTable
