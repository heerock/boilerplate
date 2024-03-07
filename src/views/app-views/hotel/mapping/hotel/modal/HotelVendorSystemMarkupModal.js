import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Modal, Typography, Card, Spin } from 'antd';
import styled from 'styled-components';
import HotelHistoryTable from '../table/HotelHistoryTable';
import LogService from "../../../../../../services/Log/LogService";
import {LoadingOutlined} from "@ant-design/icons";
import HotelMarkupHistoryTable from "../table/HotelMarkupHistoryTable";
import HotelVendorSystemMarkupTable from "../table/HotelVendorSystemMarkupTable";

const { TextArea } = Input;
const { Text } = Typography;

const HotelVendorSystemMarkupModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIsModalOpen(props.isModalOpen);
    }, [props.isModalOpen])

    useEffect(() => {
        props.setIsModalOpen(isModalOpen)
    }, [isModalOpen])

    useEffect(() => {
        console.log('vendors : ', props.vendorSystems)
        setData(props.vendorSystems)
    }, [props.vendorSystems])

	return (
        <>
            <StyleModal
                title={`전체 마크업 변경`}
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
                    spinning={props.loading}
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
                        <HotelVendorSystemMarkupTable onClick={props.onClick} data={data}/>
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

export default HotelVendorSystemMarkupModal
