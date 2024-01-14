import React, { useState, useEffect } from 'react';
import { Col, Typography, Table, Pagination } from 'antd';

const { Text } = Typography;

const DefaultTable = (props) => {
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isPagination, setIsPagination] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        setTotalCount(props.totalCount || totalCount);
    }, [props.totalCount])

    useEffect(() => {
        setPage(props.page || page);
    }, [props.page])

    useEffect(() => {
        setPageSize(props.pageSize || pageSize);
    }, [props.pageSize])

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    useEffect(() => {
        setColumns(props.columns);
    }, [props.columns])

    useEffect(() => {
        setIsPagination(props.pagination);
    }, [props.pagination])

	return (
		<>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Text>총 {totalCount}개</Text>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Table columns={columns} dataSource={data} pagination={false} />
				</Col>
                {isPagination &&
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Pagination current={page} total={(totalCount % pageSize) > 0 ? (totalCount / pageSize) + 1 : totalCount / pageSize }/>
                    </Col>
                }
		</>
	)
}

export default DefaultTable
