import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Table, Typography, Button } from 'antd';
import styled from 'styled-components';
import HotelDetailModal from './modal/HotelDetailModal';
import HotelHistoryModal from './modal/HotelHistoryModal';
import HotelNumberColumn
    from '../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn';
import HotelInformationColumn
    from '../../../../../components/shared-components/hotel/HotelColumns/HotelInformationColumn';
import ModifyHistoryColumn
    from '../../../../../components/shared-components/hotel/HotelColumns/ModifyHistoryColumn';
import DefaultTable from '../../../../../components/shared-components/hotel/Table/DefaultTable';

const { Text } = Typography;

const VendorHotelTable = (props) => {
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
          title: '공급처 호텔코드', 
          dataIndex: 'vendorHotelCode',
          align: 'center',
          width: '20%',
          render: (_, record) => {
            return (
                <>
                    <HotelNumberColumn
                        channel={record?.supplierSystem}
                        isSelfSale={record.isSelfSale}
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
          width: '20%',
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
    ])
    const [data, setData] = useState([])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            props.setSelectedVendorHotelKey(selectedRowKeys)
        },
    };

    useEffect(() => {
        setData(props.data);
    }, [props.data])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ marginTop: '1rem' }}>
                    <DefaultTable
                        pagination={true}
                        page={props.page}
                        pageSize={props.pageSize}
                        totalCount={props.pagination ? Number(props.pagination.totalElements) : 0}
                        totalPages={props.pagination ? Number(props.pagination.totalPages) : 1}
                        onChange={props.onChange}
                        rowKey={'id'}
                        rowSelection={{
                            type: `radio`,
                            columnTitle: '선택',
                            columnWidth: '7%',
                            selectedRowKeys: props.selectedVendorHotelKey,
                            ...rowSelection,
                        }}
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

export default VendorHotelTable
