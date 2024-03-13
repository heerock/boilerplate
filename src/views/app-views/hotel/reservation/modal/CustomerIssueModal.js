import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Modal, Typography, Card, Descriptions } from 'antd';
import styled from 'styled-components';
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";

const { TextArea } = Input;
const { Text, Title } = Typography;

const CustomerIssueModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerIssue, setCustomerIssue] = useState('');

    const handleOk = () => {
        props.setModalOpen(false);
        props.customerIssuedSave(customerIssue)
    };

    const handleCancel = () => {
        props.setModalOpen(false)
    };

    const onChange = (e) => {
        setCustomerIssue(e.target.value);
    };

    useEffect(() => {
        setIsModalOpen(props.isModalOpen)
    }, [props.isModalOpen])

    useEffect(() => {
        setCustomerIssue(props.customerIssue);
    }, [props.customerIssue])

	return (
        <>
            <StyleModal
                title={'고객 이슈'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    <>
                        <DefaultButton
                            style={{
                                float: 'right',
                                margin: '0 auto',
                                fontSize: '0.765rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(0deg, #1B588C, #1B588C)',
                                backgroundImage: 'linear-gradient(0deg, #337AB7, #337AB7)',
                            }}
                            color={'#FFF'}
                            onClick={handleOk}
                            text={'저장하기'}
                        />
                    </>
                }

            >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <TextArea
                        style={{ height: '20vh' }}
                        showCount
                        maxLength={500}
                        onChange={onChange}
                        placeholder={'요청사항을 입력해 주세요.'}
                        value={customerIssue}
                    />
                </Col>
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
  width: 25% !important;
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  
  
  .ant-modal-content {
    height: 40vh;
    //overflow-y: scroll;
    //::-webkit-scrollbar {
    //  display: none; /* Chrome, Safari, Opera*/
    //}
  }
  
  .ant-modal-body {
    //overflow-y: scroll;
    height: 28.8vh;
    
    .ant-descriptions-extra {
      width: auto;
      display: flex;
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
  
  ul {
    padding-left: 1.2rem;
  }
`

export default CustomerIssueModal
