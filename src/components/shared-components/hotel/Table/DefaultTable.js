import React, { useState, useEffect } from 'react';
import { Col, Typography, Table, Pagination } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const DefaultTable = (props) => {
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isPagination, setIsPagination] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        setTotalCount(totalCount => props.totalCount || 0);
    }, [props.totalCount])

    useEffect(() => {
        setPage(page => props.page || 1);
    }, [props.page])

    useEffect(() => {
        setPageSize(pageSize => props.pageSize || 10);
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
                    <Text>총 {totalCount.toLocaleString('ko-KR')}개</Text>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    {
                        props.rowSelection ?
                        <StyleTable
                            bordered={props.bordered || false}
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            rowKey={props.rowKey || 'key'}
                            rowSelection={props.rowSelection}
                            rowClassName={props?.rowClassName}
                        /> :
                        <StyleTable
                            bordered={props.bordered || false}
                            rowClassName={props?.rowClassName}
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            rowKey={props.rowKey || 'key'}
                        />
                    }
				</Col>
                {isPagination &&
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Pagination
                            style={{ margin: '0 auto', marginTop: '1rem', textAlign: 'center' }}
                            current={page}
                            pageSize={pageSize}
                            showSizeChanger={false}
                            total={totalCount}
                            showLessItems={props?.pagination?.totalPages >= 10000 ? true : false}
                            onChange={props.onChange}
                            simple={true}
                        />
                    </Col>
                }
		</>
	)
}

export default DefaultTable

export const StyleTable = styled(Table)`
    .ant-table-thead > tr > th {
        background: #D8E9F5 !important;
        text-align: center;
        font-size: 0.825rem;
        height: 0.825rem;
        line-height: 0.825rem;
    }
  
  .ant-checkbox-wrapper {
    margin: 0 auto;
  }
`

