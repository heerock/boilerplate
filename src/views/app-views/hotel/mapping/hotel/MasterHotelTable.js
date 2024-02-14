import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Popconfirm } from 'antd';
import {
    SelectOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import MappingHotel from './MappingHotel';
import HotelDetailModal from "./modal/HotelDetailModal";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";
import AffiliatesBadgeDiv from "../../../../../components/shared-components/hotel/Div/AffiliatesBadgeDiv";
import HotelNumberColumn
    from "../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn";
import HotelInformationColumn
    from "../../../../../components/shared-components/hotel/HotelColumns/HotelInformationColumn";
import ModifyHistoryColumn
    from "../../../../../components/shared-components/hotel/HotelColumns/ModifyHistoryColumn";
import DefaultTable from "../../../../../components/shared-components/hotel/Table/DefaultTable";
import HotelHistoryModal from "./modal/HotelHistoryModal";

const { Text } = Typography;

const MasterHotelTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [selectedDetailRecord, setSelectedDetailRecord] = useState(null);
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
                            channel={record?.masterSystem}
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
            width: '18%',
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
            title: '매핑',
            dataIndex: 'mappingStatus',
            align: 'center',
            width: '15%',
            render: (mappingStatus, record) => {
                return (
                    <>
                        {
                            <Popconfirm
                                placement="top"
                                title={`${mappingStatus === 'Y' ? '선택한 호텔 매핑을 해제시키겠습니까?' : '선택한 호텔을 매핑 하시겠습니까?'}`}
                                onConfirm={() => props.onClick(record.id, props.selectedVendorHotelKey, 'insert')}
                                okText="확인"
                                cancelText="취소"
                            >

                            <DefaultButton
                                style={{
                                    background: mappingStatus === 'Y' ? '#e14114' : '#208CE9',
                                    margin: '0 auto',
                                    width: '70%'
                                }}
                                text={
                                    mappingStatus === 'Y' ? `매핑취소` : `매핑하기`
                                }
                            />
                            </Popconfirm>
                        }
                    </>
                )
            }
        }
    ])
    const [data, setData] = useState([])
    const rowClassName = (record, index) => {
        if (record.mappingStatus === 'Y') {
            return 'ant-table-row-selected'
        }
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    const columnsRender = (_, record, vendorHotel, mappedHotel) => {
        return (
            <>
                {
                    <Popconfirm
                        placement="top"
                        title={`${mappedHotel ? '이미 매핑된 호텔이 있습니다.\n 정말로 매핑 하시겠습니까?' : '선택한 호텔을 매핑 하시겠습니까?'}`}
                        onConfirm={() => props.onClick(record.id, vendorHotel, 'insert')}
                        okText="확인"
                        cancelText="취소"
                    >

                        <DefaultButton
                            style={{
                                background: '#208CE9',
                                margin: '0 auto',
                                width: '70%'
                            }}
                            text={
                                `매핑하기`
                            }
                        />
                    </Popconfirm>
                }
            </>
        )
    }

    useEffect(() => {
        const vendorHotel = props.selectedVendorHotelKey[0];
        const mappedHotel = props.mappedHotel;
        setColumns(columns =>
            columns.map((column) => {
                if (column.dataIndex === 'mappingStatus') {
                    return {
                        ...column,
                        render: (mappingStatus, record) => {
                            return columnsRender(mappingStatus, record, vendorHotel, mappedHotel)
                        }
                    }
                }
                return column
            })
        )
    }, [props.selectedVendorHotelKey, props.mappedHotel])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row>
                    <DefaultTable
                        page={props.page}
                        pageSize={props.pageSize}
                        totalCount={props.pagination ? Number(props.pagination.totalElements) : 0}
                        totalPages={props.pagination ? Number(props.pagination.totalPages) : 1}
                        onChange={props.onChange}
                        pagination={true}
                        columns={columns}
                        rowClassName={rowClassName}
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

export const StyleTable = styled(Table)`
    .ant-table-thead > tr > th {
        background: #D8E9F5 !important;
        text-align: center;
    }
`

export default MasterHotelTable
