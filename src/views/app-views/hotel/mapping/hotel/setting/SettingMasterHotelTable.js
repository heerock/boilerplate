import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button, Switch } from 'antd';
import styled from 'styled-components';
import VendorHotelDetailModal from '../modal/VendorHotelDetailModal';

const { Text } = Typography;

const SettingMasterHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHotelKey, setSelectedHotelKey] = useState(null);
    const detailViewOnClick = (id) => {
        setSelectedHotelKey(id)
        setIsModalOpen(!isModalOpen)
    }
    const [columns, setColumns] = useState([
        {
            title: '마스터 호텔코드',
            dataIndex: 'masterHotelCode',
            align: 'center',
            render: (_, record) => {
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
                                <Button
                                    style={{margin: '0 auto'}}
                                    onClick={() => detailViewOnClick(record.masterHotelCode)}
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
            title: '마스터 호텔 정보',
            dataIndex: 'masterHotelInfo',
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
                                <Button style={{margin: '0 auto'}} type="link">[ 기록보기 ]</Button>
                            </Row>
                        </Col>
                    </>
                )
            }
        },
        {
            title: '판매 유무',
            dataIndex: 'isSale',
            align: 'center',
            render: (_, record) => {
                return (
                    <>
                        <Switch checked={_ === 'Y'}/>
                    </>
                )
            }
        }
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
    }, [props.data])

    useEffect(() => {
        console.log('data : ', data)
    }, [data])

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
                        pagination={false}
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
  background: ${(props) => {
    if(props.channel === 'HG') return '#76BEDB';
    else return '#3E7DB3';
  }};
  color: #FFF;
  width: auto;
  padding: 2px 5px;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
`

export const StyleSwitch = styled(Switch)`
  .ant-switch-checked {
    background: #58CC4E !important;
  }
`

export default SettingMasterHotelTable
