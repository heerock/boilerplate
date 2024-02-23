import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Popconfirm, Switch } from 'antd';
import styled from 'styled-components';
import HotelDetailModal from '../modal/HotelDetailModal';
import HotelNumberColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn";
import HotelInformationColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/HotelInformationColumn";
import ModifyHistoryColumn
    from "../../../../../../components/shared-components/hotel/HotelColumns/ModifyHistoryColumn";
import DefaultTable from "../../../../../../components/shared-components/hotel/Table/DefaultTable";
import HotelHistoryModal from "../modal/HotelHistoryModal";
import SaleService from "../../../../../../services/Sale/SaleService";

const { Text } = Typography;

const SettingMasterHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailRecord, setSelectedDetailRecord] = useState(null)
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const detailViewOnClick = (record) => {
        setSelectedDetailRecord(record)
        setIsModalOpen(!isModalOpen)
    }

    const historyModalOnClick = (record) => {
        setSelectedRecord(record)
        setIsHistoryModalOpen(!isHistoryModalOpen);
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
                            channel={record.masterSystem}
                            hotelCode={record.code}
                            onClick={() => detailViewOnClick(record)}
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
                            onClick={() => historyModalOnClick(record)}
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
            render: (isSale, record) => {
                return (
                    <>
                        <Popconfirm placement="top" title={'정말로 변경하시겠습니까?'} onConfirm={() => onConfirm(record)} okText="Yes" cancelText="No">
                            <Switch
                                checked={isSale}
                            />
                        </Popconfirm>
                    </>
                )
            }
        }
    ])
    const [data, setData] = useState([])

    const onConfirm = async (record) => {
        const response = await SaleService.saleChange(record);

        if (response?.success) {
            props.setData((data) => {
                return data.map((hotel) => {
                    if (hotel.id === record.id) {
                        return {
                            ...hotel,
                            isSale: !hotel.isSale,
                        }
                    }

                    return hotel;
                })
            })
        }
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            props.setSelectedMasterHotelKey(selectedRowKeys)
        },
    };

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ marginTop: '10px' }}>
                    <DefaultTable
                        rowKey={'id'}
                        rowSelection={{
                            type: `radio`,
                            hideSelectAll: true,
                            selectedRowKeys: props.selectedMasterHotelKey,
                            ...rowSelection,
                        }}
                        totalCount={props.pagination ? Number(props.pagination.totalElements) : 0}
                        totalPages={props.pagination ? Number(props.pagination.totalPages) : 1}
                        page={props.page}
                        pageSize={props.pageSize}
                        pagination={true}
                        onChange={props.onChange}
                        columns={columns}
                        data={data && data}
                        style={{ width: `100%`}}
                    />
                </Row>
            </Col>
            <HotelDetailModal
                isModalOpen={isModalOpen}
                selectedDetailRecord={selectedDetailRecord}
                setIsModalOpen={setIsModalOpen}
                type={'MASTER'}
            />
            <HotelHistoryModal
                isModalOpen={isHistoryModalOpen}
                selectedRecord={selectedRecord}
                setIsModalOpen={setIsHistoryModalOpen}
            />
        </>
    )
}

export default SettingMasterHotelTable
