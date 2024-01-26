import React, {useCallback, useState, useEffect} from 'react';
import moment from 'moment';
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

const DateRangeSetting = (props) => {
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
    const [allChecked, setAllChecked] = useState(false);
    const [data, setData] = useState([
        { key: '1', roomType: '트윈룸', value: 3, status: 'Y'},
    ])

    const [lastDate, setLastDate] = useState(moment().format('YYYY-MM-DD'));
    const onSelect = (value) => {
        if (
            moment(lastDate).format('YYYY') === value.format('YYYY') &&
            moment(lastDate).format('MM') === value.format('MM')
        ) {
            props.setSelectedDate([...new Set([...props.selectedDate, value.format('YYYY-MM-DD')].sort((a, b) => a.localeCompare(b)))])
        }
        setLastDate(value.format('YYYY-MM-DD'))
    };



    const onClose = (tag) => {
        props.setSelectedDate(props.selectedDate.filter((date) => date !== tag).sort((a, b) => a.localeCompare(b)))
    }

    const onClickRangeReset = () => {
        const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

        setAllChecked(false);
        days.forEach((day) => props.form.setFieldValue(day, false))
        props.form.setFieldValue('rangeDate', null);
    }

    const onClickSelectedDateReset = () => {
        setLastDate(props.selectedDate[props.selectedDate.length - 1])
        props.setSelectedDate([])
    }

    const onChangeAll = (value) => {
        const checked = value.target.checked;
        setAllChecked(checked);
        const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

        if (checked)  {
            days.forEach((day) => props.form.setFieldValue(day, true))
        } else {
            days.forEach((day) => props.form.setFieldValue(day, false))
        }
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
                                extra={<><DefaultButton text={'초기화'} onClick={onClickRangeReset} /></>}
                                content={<DateRangeContent form={props.form} onChange={onChangeAll} allChecked={allChecked} />}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <DefaultCard
                                headStyle={{ background: '#F6F6F6' }}
                                title={'날짜 개별 지정'}
                                extra={<><DefaultButton text={'초기화'} onClick={onClickSelectedDateReset} /></>}
                                content={
                                    <>
                                        <DateCalendarSetting 
                                            onSelect={onSelect}
                                            setLastDate={setLastDate}
                                        />
                                        {props.selectedDate.map((date) => (
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
                        <DefaultButton style={{ margin: '0 auto' }} text={`저장하기`} htmlType={'submit'}/>
                    </Panel>
                </Collapse>
            </Col>
		</>
	)
}

export default DateRangeSetting
