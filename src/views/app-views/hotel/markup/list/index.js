import React, { useState } from 'react';
import { Col, Input, Row, Space, Typography } from 'antd';
import styled from 'styled-components';

import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import DefaultTable from 'components/shared-components/hotel/Table/DefaultTable';
import DefaultButton from 'components/shared-components/hotel/Button/DefaultButton';
import HotelHistoryModal from '../../mapping/hotel/modal/HotelHistoryModal';
import VendorHotelDetailModal from '../../mapping/hotel/modal/VendorHotelDetailModal';

const { Text } = Typography;

const MarkupList = () => {
    const [columns, setColumns] = useState([
        { 
            title: '공급처 호텔코드', 
            dataIndex: 'vendorHotelCode',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col>
                          <Row>
                              <StyleBadgeDiv channel={record.channel}>{record.channel}</StyleBadgeDiv>
                          </Row>
                          <Row>
                              <Text style={{margin: '0 auto'}}>{record.vendorHotelCode}</Text>
                          </Row>
                          <Row>
                              <DefaultButton 
                                  style={{ width: '50%', margin: '0 auto' }}
                                  onClick={() => detailViewOnClick(record.vendorHotelCode)}
                                  text={'상세보기'}
                              />
                          </Row>
                      </Col>
                  </>
              )
            }
        },
        { 
            title: '공급처 호텔 정보', 
            dataIndex: 'vendorHotelInfo',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col>
                          <Row>
                              <Text>{`${record.country} > ${record.cityName}`}</Text>
                          </Row>
                          <Row>
                              <Text>{`${record.hotelName}`}</Text>
                          </Row>
                          <Row>
                              <Text>{`T.${record.tel} / F.${record.fax}`}</Text>
                          </Row>
                          <Row>
                              <Text>{record.address}</Text>
                          </Row>
                          <Row>
                              <Text>{`Grade: ${record.grade} STARS`}</Text>
                          </Row>
                      </Col>
                  </>
              )
            }
        },
        { 
            title: '날짜별 마크업', 
            dataIndex: '_',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                    <DefaultButton type={'link'} href={`/app/hotel/markup/${record.vendorHotelCode}`} style={{ margin: '0 auto' }} text={`설정`} />
                  </>
              )
            }
        },
        { 
            title: '마크업 변경', 
            dataIndex: '_',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col>
                      <Space>
                        <Input />
                        <Text>%</Text>
                        <DefaultButton text={`저장`} />
                      </Space>
                      </Col>
                  </>
              )
            }
        },
        { 
            title: '최종 수정 이력', 
            dataIndex: 'updatedAt',
            align: 'center',
            render: (_, record) => {
              return (
                  <>
                      <Col style={{display: 'inline-grid'}}>
                          <Row>
                              {record.updatedId}        
                          </Row>
                          <Row>
                              {record.updatedAt}        
                          </Row>
                          <Row>
                              <DefaultButton 
                                  style={{margin: '0 auto'}} 
                                  type="link"
                                  text={`기록보기`}
                                  onClick={() => historyModalOnClick(record.vendorHotelCode)}
                              />
                          </Row>
                      </Col>
                  </>
              )
            }
          },
    ])

    const [data, setData] = useState([
        { key: '1', vendorHotelCode: 'HK12345678', channel: 'HG', country: 'Japan', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00'},
    ])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false); 
    const [selectedHotelKey, setSelectedHotelKey] = useState(null);

    const historyModalOnClick = (key) => {
        setSelectedHotelKey(key);
        setIsHistoryModalOpen(!isHistoryModalOpen)
    }

    const detailViewOnClick = (key) => {
        setSelectedHotelKey(key);
        setIsModalOpen(!isModalOpen);
    }

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 마크업 관리'}/>
                    </Row>
                    <Row>
                        <SearchFilter />
                    </Row>
                    <Row gutter={[8, 8]} style={{ marginTop: '1.825rem' }}>
                        <DefaultTable 
                            totalCount={1}
                            columns={columns} 
                            data={data}
                        />
                    </Row>
				</Col>
			</Row>

            <VendorHotelDetailModal 
                isModalOpen={isModalOpen} 
                selectedHotelKey={selectedHotelKey}
                setIsModalOpen={setIsModalOpen}
            />
            <HotelHistoryModal 
                isModalOpen={isHistoryModalOpen}
                setIsModalOpen={setIsHistoryModalOpen}
            />
		</>
	)
}


export const StyleBadgeDiv = styled.div`
  background: ${(props) => props.channel === 'HG' && '#76BEDB'};
  color: #FFF;
  width: 30%;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
`

export default MarkupList
