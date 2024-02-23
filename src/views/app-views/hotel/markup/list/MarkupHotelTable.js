import React, { useState } from 'react';
import { Typography, message } from 'antd';
import styled from 'styled-components';

import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import DefaultTable from 'components/shared-components/hotel/Table/DefaultTable';
import DefaultButton from 'components/shared-components/hotel/Button/DefaultButton';
import HotelHistoryModal from '../../mapping/hotel/modal/HotelHistoryModal';
import HotelDetailModal from '../../mapping/hotel/modal/HotelDetailModal';
import HotelNumberColumn from "../../../../../components/shared-components/hotel/HotelColumns/HotelNumberColumn";
import HotelInformationColumn
    from "../../../../../components/shared-components/hotel/HotelColumns/HotelInformationColumn";
import ModifyHistoryColumn from "../../../../../components/shared-components/hotel/HotelColumns/ModifyHistoryColumn";
import HotelMarkupColumn from "../../../../../components/shared-components/hotel/HotelColumns/HotelMarkupColumn";
import VendorService from "../../../../../services/Vendor/VendorService";
import HotelMarkupHistoryModal from "../../mapping/hotel/modal/HotelMarkupHistoryModal";

const { Text } = Typography;

const MarkupHotelTable = (props) => {
    const [columns, setColumns] = useState([
        {
            title: '공급처 호텔코드',
            dataIndex: 'vendorHotelCode',
            align: 'center',
            width: '10%',
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
            title: '날짜별 마크업',
            dataIndex: '_',
            align: 'center',
            width: '10%',
            render: (_, record) => {
                return (
                    <>
                        <DefaultButton
                            // type={'link'}
                            // href={`/app/hotel/markup/${record.vendorHotelCode}`}
                            style={{ margin: '0 auto' }}
                            text={`설정`}
                        />
                    </>
                )
            }
        },
        {
            title: '마크업 변경',
            dataIndex: '_',
            align: 'center',
            width: '15%',
            render: (_, record) => {
                return (
                    <>
                        <HotelMarkupColumn record={record} onClick={onClickMarkupSave}/>
                    </>
                )
            }
        },
        {
            title: '최종 수정 이력',
            dataIndex: 'updatedAt',
            align: 'center',
            width: '10%',
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailRecord, setSelectedDetailRecord] = useState(null)
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const successFunc = () => {
        message.success('마크업 변경이 성공하였습니다.');
    };

    const onClickMarkupSave = async (record, rate) => {
        const { success } = await VendorService.updatedMarkupHotel({ record, rate: rate })

        if (success) {
            successFunc();
            props.setData((data) => {
                return data.map((hotel) => {
                    if (hotel.id === record.id) {
                        return {
                            ...hotel,
                            markupRate: rate
                        }
                    }

                    return hotel;
                })
            })
        }
    }

    const historyModalOnClick = (record) => {
        setSelectedRecord(record)
        setIsHistoryModalOpen(!isHistoryModalOpen);
    }

    const detailViewOnClick = (record) => {
        setSelectedDetailRecord(record)
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <DefaultTable
                columns={columns}
                data={props.data}
                rowKey={'id'}
                totalCount={props.pagination ? Number(props.pagination.totalElements) : 0}
                totalPages={props.pagination ? Number(props.pagination.totalPages) : 1}
                page={props.page}
                pageSize={props.pageSize}
                pagination={true}
                onChange={props.onChange}
                style={{ width: `100%`}}
            />

            <HotelDetailModal
                isModalOpen={isModalOpen}
                selectedDetailRecord={selectedDetailRecord}
                setIsModalOpen={setIsModalOpen}
                type={'VENDOR'}
            />
            <HotelMarkupHistoryModal
                isModalOpen={isHistoryModalOpen}
                selectedRecord={selectedRecord}
                setIsModalOpen={setIsHistoryModalOpen}
            />
        </>
    )
}


export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.channel === 'HG' && '#76BEDB'};
  color: #FFF;
  width: 30%;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
`

export default MarkupHotelTable
