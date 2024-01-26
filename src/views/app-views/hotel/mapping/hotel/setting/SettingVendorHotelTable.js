import React, { useState, useEffect } from 'react';
import { Col, Row, Popconfirm, Table, Typography, Button, Switch } from 'antd';
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

const SettingVendorHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHotelKey, setSelectedHotelKey] = useState(null);
    const [selectedMappingHotelKey, setSelectedMappingHotelKey] = useState([]);
    const detailViewOnClick = (id) => {
        setSelectedHotelKey(id)
        setIsModalOpen(!isModalOpen)
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
                            onClick={() => detailViewOnClick(record.code)}
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
                            // onClick={() => historyModalOnClick()}
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
                        <Popconfirm placement="top" title={'정말로 변경하시겠습니까?'} onConfirm={() => onConfirm(record.id)} okText="Yes" cancelText="No">
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

    const onChange = (key, checked) => {
        props.setData((data) =>
            data.map((hotel) => {
                if (hotel.key === key) {
                    return {
                        ...hotel,
                        isMapping: checked ? 'N' : 'Y',
                    }
                }

                return hotel
            })
        )
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    useEffect(() => {
        if (data.length > 0) {
            setSelectedMappingHotelKey(
                data.filter((hotel) => hotel.isMapping === 'Y')
                    .map((hotel) => hotel.key)
            )
        }
    }, [data])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <DefaultTable
                        totalCount={data.length}
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
                                            onConfirm={() => onChange(record.key, checked)}
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
            <VendorHotelDetailModal
                isModalOpen={isModalOpen}
                selectedHotelKey={selectedHotelKey}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    )
}

export default SettingVendorHotelTable
