import React, { useState, useEffect } from 'react';
import { Col, Row, Radio, Modal, Typography, Select, Divider } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const VendorHotelDetailModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

	return (
        <>
            <Modal 
                style={{width: `80%`}}
                open={isModalOpen}
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Text>TEST MODAL {props.selectedHotelKey}</Text>
                </Col>
            </Modal>
        </>
	)
}

export default VendorHotelDetailModal
