import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Modal, Typography, Card, Descriptions } from 'antd';
import styled from 'styled-components';
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import {FolderOpenOutlined} from "@ant-design/icons";
import DefaultSelect from "../../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultInput from "../../../../../../components/shared-components/hotel/Input/DefaultInput";
import DefaultTextArea from "../../../../../../components/shared-components/hotel/Input/DefaultTextArea";
import HotelDetailInformation from "./exclusive-sale/HotelDetailnformation";

const { TextArea } = Input;
const { Text, Title } = Typography;

const VendorHotelDetailModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [key, setKey] = useState(null);
    const [hotel, setHotel] = useState({});
    const [specialText, setSpecialText] = useState('특별 체크인 지점');
    const [type, setType] = useState();
    const [editMode, setEditMode] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
    setIsModalOpen(false);
    };

    const onChangeSelfSale = () => {

    }

    useEffect(() => {
        setIsModalOpen(props.isModalOpen);
    }, [props.isModalOpen])

    useEffect(() => {
        props.setIsModalOpen(isModalOpen)
    }, [isModalOpen])

    useEffect(() => {
        setType(props.type);
    }, [props.type])

    useEffect(() => {
        setKey(props.selectedHotelKey);
    }, [props.selectedHotelKey])

    useEffect(() => {
        if (key) {
            getFetch(key);
        }

    }, [key])

    const onClickEdit = () => {
        setEditMode(!editMode)
    }

    const onChangeSpecial = (input) => {
        setSpecialText(input.target.value)
    }

    useEffect(() => {
        if (hotel) {
            setSelectedKey([hotel.cityCode])
        }
    }, [hotel])

    const getFetch = async (key) => {
        const data = [
            { key: 'HK12345679', hotelCode: 'HK12345679', channel: 'HIKARI', country: 'Japan', cityCode: 'KYOTO', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSelfSale: true},
            { key: 'HK12345678', hotelCode: 'HK12345678', channel: 'HIKARI', country: 'Japan', cityCode: 'KYOTO', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSelfSale: false},
            { key: 'HK12345680', hotelCode: 'HK12345680', channel: 'HIKARI', country: 'Japan', cityCode: 'KYOTO', cityName: '교토 (Kyoto)', address: 'Karasuma Shijo, Shimogyo-ku 600-8412 Kyoto JP', hotelName: 'KARASUMA KYOTO HOTEL1', tel: '075-371-0111', fax: '075-221-7770', grade: 4, updatedId: 'heerock@teamo2.kr', updatedAt: '2023-12-25 15:48:00', isSelfSale: false}
        ]

        setHotel(data.find((hotel) => hotel.key === key))
    }

	return (
        <>
            <StyleModal
                title={'상세 보기'}
                style={{width: `100%`, top: '14px'}}
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
                            // onClick={onChangeSelfSale}
                            text={'저장하기'}
                        />
                    </>
                }

            >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Descriptions
                        labelStyle={{fontWeight: 'bold'}}
                        title="공급처 호텔 정보"
                        size={'middle'}
                        extra={
                        <>
                             <DefaultButton
                                 style={{
                                     margin: '0 auto',
                                     fontSize: '0.765rem',
                                     fontWeight: 'bold',
                                     background: hotel?.isSelfSale ? 'linear-gradient(0deg, #F0AD4E, #F0AD4E)' : 'linear-gradient(0deg, #D9534F, #D9534F)',
                                     // backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(217, 83, 79, 0.2) 100%)',
                                 }}
                                 color={'#FFF'}
                                 onClick={onChangeSelfSale}
                                 text={hotel?.isSelfSale ? '단독 판매중단' : '단독 판매하기'}
                             />
                             <DefaultButton
                                style={{
                                margin: '0 auto',
                                marginLeft: '0.525rem',
                                fontSize: '0.765rem',
                                fontWeight: 'bold',
                                backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                                }}
                                color={'#000'}
                                onClick={onClickEdit}
                                text={editMode ? '편집해제' : '편집'}
                            />
                        </>
                        }
                        bordered
                    >
                        <Descriptions.Item label="호텔코드" labelStyle={{ width: '15%'}}>{hotel && hotel.hotelCode}</Descriptions.Item>
                        <Descriptions.Item label="유형" span={2}>
                            <DefaultSelect
                                width={50}
                                value={['HOTEL']}
                                disabled={true}
                                setSelectedKey={setSelectedKey}
                                placeholder={'== 유형 선택 =='}
                                options={[{ label: '호텔', value: 'HOTEL' }]}
                            />
                        </Descriptions.Item>

                        <Descriptions.Item label="호텔명(한글)">가마쿠라 교토 호텔</Descriptions.Item>
                        <Descriptions.Item label="호텔명(영어)" labelStyle={{ width: '12%'}} span={2}>Karasuma Kyoto Hotel</Descriptions.Item>

                        <Descriptions.Item label="국가">Japan</Descriptions.Item>
                        <Descriptions.Item label="도시" span={2}>
                            <DefaultSelect
                                width={50}
                                value={selectedKey}
                                setSelectedKey={setSelectedKey}
                                placeholder={'== 도시 선택 =='}
                                options={[{ label: '교토 (Kyoto)', value: 'KYOTO' }]}
                            />
                        </Descriptions.Item>

                        <Descriptions.Item label="주소" span={3}>Karasuma Shijo, Shimogyo-ku, Kyoto, Kyoto, 600-8412</Descriptions.Item>

                        <Descriptions.Item label="위치(위도)">35.0019122</Descriptions.Item>
                        <Descriptions.Item label="위치(경도)" span={2}>135.7592164</Descriptions.Item>

                        <Descriptions.Item label="룸타입" span={3}>
                            Standard 2 Person(ADVANCE/CITYVIEW) / Standard 2 Person(ADVANCE/CITYVIEW) / Standard Double(CITYVIEW) / Standard Double(CITYVIEW) / Standard Single(CITYVIEW) / Standard Single(CITYVIEW) / Standard Single(ADVANCE/CITYVIEW) / Standard Single(ADVANCE/CITYVIEW) / Standard Triple(CITYVIEW) / Standard Twin(CITYVIEW) /
                        </Descriptions.Item>
                        <Descriptions.Item label="등급" span={3}>4 STARS</Descriptions.Item>

                        <Descriptions.Item label="연락처">81-467-255121</Descriptions.Item>
                        <Descriptions.Item label="팩스" span={2}>81-467-253778</Descriptions.Item>

                        <Descriptions.Item label="체크인 시간">15:00</Descriptions.Item>
                        <Descriptions.Item label="체크아웃 시간" span={2}>11:00</Descriptions.Item>

                        <Descriptions.Item label="특별 체크인 지점" span={3}>
                            {
                                editMode ? <DefaultInput value={specialText} onChange={onChangeSpecial} /> : '특별 체크인 지점'
                            }
                        </Descriptions.Item>
                        <Descriptions.Item label="소개 (한글)" span={3}>
                            location 지하철 카라스마선 "시조(四条)역" 남쪽출구 6번한큐선 "카라스마(烏丸)역" 하차 서쪽출구 23번 general JR교토역에서 10분 거리에 위치한 호텔로. 교토의 제일 번화가인 기온거리에도 가깝고 조용한 곳에 위치해 있어서 비지니스에는 물론이고 관광에도 적합한 호텔이다. 특히 조식이 깔끔해서 여행객들에게 인기가 높다 lobby - 레스토랑 - 바 - 로비, 프론트 데스크 - 연회장 - 맛사지 - 결혼식장
                        </Descriptions.Item>
                        <Descriptions.Item label="상세위치 (한글)" span={3}>
                            {
                                editMode ?
                                    <>
                                        <Row gutter={[8,8]}>
                                            <DefaultInput />
                                            <DefaultInput />
                                        </Row>
                                    </>
                                : '특별 체크인 지점'
                            }
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col>
                    <StyleCard title={'호텔 편의 시설 및 서비스'} style={{marginTop: '20px'}} bodyStyle={{height: '250px'}}>
                        <Text>카테고리</Text>
                        무료 Wi-fi (전객실) 조식포함 무료 주차장 레스토랑 실내 수영장 엘리베이터 피트니스 센터 식당 카페 수하물 보관소
                    </StyleCard>

                    <HotelDetailInformation editMode={editMode}/>

                    <StyleCard title={'중요 정보'} bodyStyle={{height: '250px'}}>
                        <Text>주요 안내사항</Text>
                    </StyleCard>
                    <StyleCard title={'부가 정보'} bodyStyle={{height: '250px'}}>
                        <Text>추가 안내사항</Text>
                    </StyleCard>

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
  
  .ant-modal-body {
    overflow-y: scroll;
    height: 83vh;
    
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
`

export default VendorHotelDetailModal
