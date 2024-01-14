import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Calendar, Form, Divider, Collapse, Card, DatePicker, Space, Button, Input, Tag } from 'antd';
import DefaultCheckbox from 'components/shared-components/hotel/Checkbox/DefaultCheckbox';
import DefaultCard from 'components/shared-components/hotel/Card/DefaultCard';
import DefaultButton from 'components/shared-components/hotel/Button/DefaultButton';
import DateCalendarSetting from './dateCalendarSetting';
import DateRangeContent from './dateRangeContent';
import DefaultTable from 'components/shared-components/hotel/Table/DefaultTable';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;
const { Panel } = Collapse;

const DateRangeSetting = () => {
    const [columns, setColumns] = useState([
        { 
            title: '룸 종류', 
            dataIndex: 'roomType',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col>
                          <Row>
                              <Text style={{margin: '0 auto'}}>{record.roomType}</Text>
                          </Row>
                      </Col>
                  </>
              )
            }
        },
        { 
            title: '개별 마크업 설정', 
            dataIndex: '_',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col>
                            <Space>
                              <Input value={record.value}/>
                              <Text>%</Text>
                            </Space>
                      </Col>
                  </>
              )
            }
        },
        { 
            title: '사용 유무', 
            dataIndex: 'status',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                    <Text>Y</Text>
                  </>
              )
            }
        },
    ])

    const [data, setData] = useState([
        { key: '1', roomType: '트윈룸', value: 3, status: 'Y'},
    ])

    const [selectedDate, setSelectedDate] = useState([]);
    const onSelect = (value) => {
        setSelectedDate([...new Set([...selectedDate, value.format('YYYY-MM-DD')])])
    }

    const onClose = (tag) => {
        setSelectedDate(selectedDate.filter((date) => date !== tag))
    }

	return (
		<>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Title level={3} >호텔모아</Title>
                <Divider style={{ margin: '0 0 1rem 0', color: '#000' }}/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Collapse style={{ backgroundColor: '#FFF' }} defaultActiveKey={['']} ghost>
                    <Panel header="적용 날짜 선택" key="1" style={{ padding: '1rem !important' }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <DefaultCard
                                headStyle={{ background: '#F6F6F6' }}
                                title={'날짜 범위'}
                                extra={<><DefaultButton text={'초기화'} /></>}
                                content={<DateRangeContent />}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <DefaultCard
                                headStyle={{ background: '#F6F6F6' }}
                                title={'날짜 개별 지정'}
                                extra={<><DefaultButton text={'초기화'} /></>}
                                content={
                                    <>
                                        <DateCalendarSetting 
                                            onSelect={onSelect}
                                            selectedDate={selectedDate}
                                        />
                                        {selectedDate.map((date) => (
                                            <>
                                                <Tag closable onClose={() => onClose(date)}>{date}</Tag>
                                            </>
                                        ))
                                        }
                                    </>
                                }
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <DefaultCard 
                                headStyle={{ background: '#F6F6F6' }}
                                title={'룸별 > 마크업 설정'}
                                content={
                                    <DefaultTable 
                                        totalCount={1}
                                        columns={columns} 
                                        data={data}
                                    />
                                }
                            />
                        </Col>
                        <DefaultButton style={{ margin: '0 auto' }} text={`저장하기`}/>
                    </Panel>
                </Collapse>
            </Col>
		</>
	)
}

export default DateRangeSetting