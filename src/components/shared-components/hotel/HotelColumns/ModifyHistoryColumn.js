import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import DefaultButton from '../Button/DefaultButton';
import { FolderOpenOutlined } from '@ant-design/icons';
const { Text } = Typography;

const ModifyHistoryColumn = (props) => {
    const { record } = props;

    return (
        <>
            <Col style={{display: 'inline-grid', fontSize: '0.785rem'}}>
                <Row style={{ margin: '0 auto' }}>
                    {record?.log?.email}
                </Row>
                <Row style={{ margin: '0 auto' }}>
                    {record?.log?.updatedAt}
                </Row>
                <Row>
                    <DefaultButton
                        style={{
                            margin: '0 auto',
                            fontSize: '0.765rem',
                            background: '#FFF',
                            // backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                        }}
                        // type="link"
                        color={'#000'}
                        onClick={props.onClick}
                        prefixIcons={<FolderOpenOutlined/>}
                        text={'기록보기'}
                    />
                </Row>
            </Col>
        </>
    )
}

export default ModifyHistoryColumn
