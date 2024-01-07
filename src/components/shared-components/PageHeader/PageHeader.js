import React, { useEffect, useState } from 'react';
import { Col, Row, Typography, Divider } from 'antd';

const { Title } = Typography;

const PageHeader = (props) => {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState(1);

    useEffect(() => {
        setTitle(props.title);
    }, [props.title])

    useEffect(() => {
        setLevel(props.level)
    }, [props.level])

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Title level={level}>{title}</Title>
                    <Divider />
            </Col>
		</>
	)
}

export default PageHeader
