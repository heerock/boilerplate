import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Modal, Typography, Card, Descriptions } from 'antd';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import DefaultSelect from "../../../../../../components/shared-components/hotel/Select/DefaultSelect";
import DefaultInput from "../../../../../../components/shared-components/hotel/Input/DefaultInput";
import HotelDetailInformation from "./exclusive-sale/HotelDetailnformation";
import MasterService from "../../../../../../services/Master/MasterService";
import VendorService from "../../../../../../services/Vendor/VendorService";
import VendorFacilities from "./detail-modal/VendorFacilities";
import MasterFacilities from "./detail-modal/MasterFacilities";
import ImportantInformation from "./detail-modal/ImportantInformation";
import AdditionalInformation from "./detail-modal/AdditionalInformation";

const { TextArea } = Input;
const { Text, Title } = Typography;

const HotelDetailModal = (props) => {
    const { mappingCountries, mappingCountriesOption } = useSelector(state => state.location);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [record, setRecord] = useState(null);
    const [hotel, setHotel] = useState({});
    const [specialText, setSpecialText] = useState('특별 체크인 지점');
    const [type, setType] = useState();
    const [editMode, setEditMode] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hotelTypeOptions, setHotelTypeOptions] = useState([
        { label: '호텔', value: 'HOTEL' },
        { label: '모텔', value: 'MOTEL' },
        { label: '리조트', value: 'RESORT' },
        { label: '인/여관', value: 'INN' },
        { label: 'B&B', value: 'BNB' },
        { label: '게스트하우스', value: 'GUEST_HOUSE' },
        { label: '콘도', value: 'CONDO' },
        { label: '올 인클루시브 숙박 시설', value: 'ALL_INCLUSIVE' },
        { label: '호스텔/백패커', value: 'HOSTEL_BACKPACKER' },
        { label: '료칸', value: 'RYOKAN' },
        { label: '콘도 리조트', value: 'CONDO_RESORT' },
        { label: '펜션', value: 'PENSION' },
        { label: '레지던스', value: 'RESIDENCE' },
        { label: '기타', value: 'ETC' },
    ])

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
        if (props.selectedDetailRecord) {
            setRecord(props.selectedDetailRecord);
        }
    }, [props.selectedDetailRecord])

    useEffect(() => {
        if (record) {
            getFetch(record);
        }

    }, [record])

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

    useEffect(() => {
        // console.log('mappingCountries : ' ,mappingCountries)
    }, [mappingCountries])

    const getFetch = async (record) => {
        let service = null;

        switch (type) {
            case 'VENDOR':
                service = VendorService;
                break;
            default:
                service = MasterService;
                break;
        }

        const response = await service.findHotelDetail(record);

        const check_in = response.hotel.policies.find((policy) => policy.type === 'CHECK_IN')?.description
        const check_out = response.hotel.policies.find((policy) => policy.type === 'CHECK_OUT')?.description

        setCheckIn(check_in || '');
        setCheckOut(check_out || '');
        setHotel(response.hotel);
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
                        title={`${type === 'VENDOR' ? '공급처' : '마스터'} 호텔 정보`}
                        size={'middle'}
                        extra={
                        <>
                            {
                                type === 'VENDOR' &&
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
                        </>
                        }
                        bordered
                    >
                        <Descriptions.Item label="호텔코드" labelStyle={{ width: '15%'}}>{hotel && hotel?.code}</Descriptions.Item>
                        <Descriptions.Item label="유형" span={2}>
                            <DefaultSelect
                                width={50}
                                value={[hotel && hotel?.category?.category]}
                                disabled={true}
                                setSelectedKey={setSelectedKey}
                                placeholder={'== 유형 선택 =='}
                                options={[{ label: '호텔', value: 'HOTEL' }]}
                            />
                        </Descriptions.Item>

                        <Descriptions.Item label="호텔명(한글)">{hotel && hotel?.name}</Descriptions.Item>
                        <Descriptions.Item label="호텔명(영어)" labelStyle={{ width: '12%'}} span={2}>{hotel && hotel?.englishName}</Descriptions.Item>

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

                        <Descriptions.Item label="주소" span={3}>{hotel && hotel?.address}</Descriptions.Item>

                        <Descriptions.Item label="위치(위도)">{hotel && hotel?.coordinates?.latitude}</Descriptions.Item>
                        <Descriptions.Item label="위치(경도)" span={2}>{hotel && hotel?.coordinates?.longitude}</Descriptions.Item>

                        <Descriptions.Item label="룸타입" span={3}>
                            {
                                hotel && hotel?.rooms && hotel.rooms.length > 0 &&
                                hotel.rooms.map((room) => `${room.name} ${room.viewName ? '('.concat(room.viewName).concat(')') : ''}`).join(' / ')
                            }
                        </Descriptions.Item>
                        <Descriptions.Item label="등급" span={3}>{hotel && Number(hotel?.rating)} STARS</Descriptions.Item>

                        <Descriptions.Item label="연락처">{hotel && hotel?.phone}</Descriptions.Item>
                        <Descriptions.Item label="팩스" span={2}>{hotel && hotel?.fax}</Descriptions.Item>

                        <Descriptions.Item label="체크인 시간">{checkIn}</Descriptions.Item>
                        <Descriptions.Item label="체크아웃 시간" span={2}>{checkOut}</Descriptions.Item>

                        <Descriptions.Item label="특별 체크인 지점" span={3}>
                            {
                                editMode ? <DefaultInput value={specialText} onChange={onChangeSpecial} /> : ''
                            }
                        </Descriptions.Item>
                        <Descriptions.Item label="소개 (한글)" span={3}>
                            { hotel && hotel?.description }
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
                                : ''
                            }
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col>
                    <StyleCard title={'호텔 편의 시설 및 서비스'} style={{ marginTop: '20px' }} bodyStyle={{ }}>
                        <VendorFacilities facilities={hotel?.sourceFacilities}/>
                        <MasterFacilities facilities={hotel?.facilities} />
                    </StyleCard>

                    <HotelDetailInformation editMode={editMode} information={hotel?.information} languages={hotel?.languages}/>
                    <ImportantInformation policies={hotel?.policies} />
                    <AdditionalInformation policies={hotel?.policies} onsitePaymentTypes={hotel?.onsitePaymentTypes} />
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
  
  ul {
    padding-left: 1.2rem;
  }
`

export default HotelDetailModal
