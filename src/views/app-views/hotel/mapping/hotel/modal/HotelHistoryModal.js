import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Modal, Typography, Card, Spin } from 'antd';
import styled from 'styled-components';
import HotelHistoryTable from '../table/HotelHistoryTable';
import LogService from "../../../../../../services/Log/LogService";
import {LoadingOutlined} from "@ant-design/icons";

const { TextArea } = Input;
const { Text } = Typography;

const defaultData = [
    { seq: 1, historyType: '매핑', status: 'Y', vender: 'HIKARI', hotelCode: 'JP00234', hotelName: 'KARASUMA KYOTO HOTEL', updatedUser: 'heerock', updatedAt: '2024-01-07 00:00:00'}
]

const HotelHistoryModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const handleOk = () => {
        setIsModalOpen(false);
      };

    const handleCancel = () => {
    setIsModalOpen(false);
    };

    const getFetch = (record) => {
        setLoading(true)
        Promise.allSettled([findLog(record)]).then(() => setLoading(false))
    }

    const findLog = async (record) => {
        let channel = null;
        if ('supplierSystem' in record) {
            channel = record.supplierSystem;
        } else if ('masterSystem' in record) {
            channel = record.masterSystem;
        }

        const response = await LogService.findByHotelId(record.id, { sourceSystem: channel })
        setData(response.logs)
    }

    useEffect(() => {
        setIsModalOpen(props.isModalOpen);
    }, [props.isModalOpen])

    useEffect(() => {
        props.setIsModalOpen(isModalOpen)
    }, [isModalOpen])

    useEffect(() => {
        setType(props.type === 'MASTER' ? '마스터' : '공급처')
    }, [props.type])

    useEffect(() => {
        if (props.selectedRecord) {
            getFetch(props.selectedRecord)
        }
    }, [props.selectedRecord])

	return (
        <>
            <StyleModal
                title={`${type} 호텔 수정 기록`}
                style={{width: `100%`, top: '14px'}}
                open={isModalOpen}
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}

            >
                <Spin
                    style={{
                        position: 'fixed',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    spinning={loading}
                    tip={'로딩중..'}
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: '4rem',
                            }}
                            spin
                        />
                    }
                >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <HotelHistoryTable data={data} />
                    </Col>
                </Spin>
            </StyleModal>
        </>
	)
}

export const StyleTextArea = styled(TextArea)`
    .ant-input-disabled.textarea {
      border: none !important;
      background: unset !important;
    }
  
  .ant-input:disabled {
    border: none !important;
    background: unset !important;
  }
`
export const StyleModal = styled(Modal)`
  width: 65% !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  .ant-modal-content {
    height: 95vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

export const StyleCard = styled(Card)`
  display: block;
  .ant-card-head {
    background: #fafafa;
    .ant-card-head-title {
      padding: 10px 0 !important;
    }
  }
`

export default HotelHistoryModal
