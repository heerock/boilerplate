import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Popconfirm, Switch } from 'antd';
import styled from 'styled-components';
import VendorHotelDetailModal from '../modal/VendorHotelDetailModal';
import HotelNumberColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn";
import HotelInformationColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/HotelInformationColumn";
import ModifyHistoryColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/ModifyHistoryColumn";
import DefaultTable from "../../../../../../components/shared-components/hotel/Table/DefaultTable";

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
            width: '20%',
            render: (_, record) => {
                return (
                    <>
                        <HotelNumberColumn
                            channel={record.supplierSystem}
                            hotelCode={record.hotelCode}
                            onClick={() => detailViewOnClick(record.hotelCode)}
                        />
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
                        <>
                            <HotelInformationColumn record={record}/>
                        </>
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
                        <ModifyHistoryColumn
                            record={record}
                            // onClick={}
                        />
                    </>
                )
            }
        },
        {
            title: '판매 여부',
            dataIndex: 'isSale',
            align: 'center',
            width: '12%',
            render: (_, record) => {
                return (
                    <>
                        <Popconfirm placement="top" title={'정말로 변경하시겠습니까?'} onConfirm={() => onConfirm(record.key)} okText="Yes" cancelText="No">
                            <Switch
                                checked={_ === 'Y'}
                            />
                        </Popconfirm>
                    </>
                )
            }
        }
    ])
    const [data, setData] = useState([])

    const onConfirm = (key) => {
        props.setData((data) => {
            return data.map((hotel) => {
                if (hotel.key === key) {
                    return {
                        ...hotel,
                        isSale: hotel.isSale === 'N' ? 'Y' : 'N',
                    }
                }

                return hotel;
            })
        })
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    const onChangeSwitch = (checked, key) => {
        props.setData((data) => {
            return data.map((hotel) => {
                if (hotel.key === key) {
                    return {
                        ...hotel,
                        isSale: checked ? 'Y' : 'N',
                    }
                }

                return hotel;
            })
        })
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    useEffect(() => {
        console.log('data : ', data)
    }, [data])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ marginTop: '10px' }}>
                    <DefaultTable
                        totalCount={data.length}
                        rowSelection={{
                            type: `radio`,
                            hideSelectAll: true,
                            ...rowSelection,
                        }}
                        isPagination={false}
                        columns={columns}
                        data={data && data}
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

export default SettingMasterHotelTable
