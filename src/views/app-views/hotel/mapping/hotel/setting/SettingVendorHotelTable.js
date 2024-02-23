import React, { useState, useEffect } from 'react';
import { Col, Row, Popconfirm, Table, Typography, Button, Switch } from 'antd';
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
import VendorService from "../../../../../../services/Vendor/VendorService";

const { Text } = Typography;

const SettingVendorHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailRecord, setSelectedDetailRecord] = useState(null)
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedMappingHotelKey, setSelectedMappingHotelKey] = useState([]);
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
            title: '공급처 호텔코드',
            dataIndex: 'vendorHotelCode',
            align: 'center',
            width: '20%',
            render: (_, record) => {
                return (
                    <>
                        <HotelNumberColumn
                            channel={record.supplierSystem}
                            hotelCode={record.code}
                            onClick={() => detailViewOnClick(record)}
                        />
                    </>
                )
            }
        },
        {
            title: '공급처 호텔 정보',
            dataIndex: 'vendorHotelInfo',
            align: 'center',
            render: (_, record) => {
                return (
                    <>
                        <HotelInformationColumn record={record}/>
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

    const onChange = async (record, checked) => {
        if (props.selectedMasterHotelKey && props.selectedMasterHotelKey.length > 0) {
            const response = await VendorService.mappedChange(record, props.selectedMasterHotelKey[0]);

            if (response?.success) {
                props.setData((data) =>
                    data.map((hotel) => {
                        if (hotel.id === record.id) {
                            return {
                                ...hotel,
                                isMapped: !checked,
                            }
                        }

                        return hotel
                    })
                )
            }
        }
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    useEffect(() => {
        if (data.length > 0) {
            setSelectedMappingHotelKey(
                data.filter((hotel) => hotel.isMapped)
                    .map((hotel) => hotel.id)
            )
        }
    }, [data])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <DefaultTable
                        totalCount={data.length}
                        rowKey={'id'}
                        rowSelection={{
                            type: `checkbox`,
                            columnTitle: '매핑',
                            columnWidth: '7%',
                            renderCell: (checked, record, index, originNode) => {
                                return (
                                    <>
                                        <Popconfirm
                                            placement="top"
                                            title={`${checked ? '선택한 호텔 매핑을 해제시키겠습니까?' : '선택한 호텔을 매핑 하시겠습니까?'}`}
                                            onConfirm={() => onChange(record, checked)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            {originNode}
                                        </Popconfirm>
                                    </>
                                )
                            },
                            selectedRowKeys: selectedMappingHotelKey,
                        }}
                        isPagination={false}
                        columns={columns}
                        data={data}
                        style={{ width: `100%`}}
                    />
                </Row>
            </Col>
            <HotelDetailModal
                isModalOpen={isModalOpen}
                selectedDetailRecord={selectedDetailRecord}
                setIsModalOpen={setIsModalOpen}
                type={'VENDOR'}
            />
            <HotelHistoryModal
                isModalOpen={isHistoryModalOpen}
                selectedRecord={selectedRecord}
                setIsModalOpen={setIsHistoryModalOpen}
            />
        </>
    )
}

export default SettingVendorHotelTable
