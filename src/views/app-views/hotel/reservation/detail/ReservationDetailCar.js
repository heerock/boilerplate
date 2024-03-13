import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Col, Row, Typography, Spin, Tabs, Descriptions} from 'antd';
import styled from "styled-components";
import {SelectOutlined} from "@ant-design/icons";
import DefaultButton from "../../../../../components/shared-components/hotel/Button/DefaultButton";
import {ADMIN_HOST} from "../../../../../configs/HostConfig";


const { Text } = Typography;

const ReservationDetailCar = (props) => {
    const { record, carInfo, isGlobalApi } = props;


    const onClickAffiliateInfo = (carInfo) => {
        if (carInfo) {
            if (carInfo.type === 'JEJU') {
                window.location.href = `${ADMIN_HOST}/apiAffiliate/ApiAffiliateInventory?pet_on=1&pet_off=1&fishing_on=1&fishing_off=1&army_on=1&army_professional_only=1&army_off=1&foreigner_on=1&foreigner_off=1&searchParam=1&searchValue=${carInfo.shop.companyName}&search=1`;
            } else {
                window.location.href = `${ADMIN_HOST}/partners/PartnerMemberBranchDetail?branch_index=${carInfo.shop.branchIdx}`;
            }
        }
    }

    const getFetch = async () => {

    }

    const getCancellationFee = async () => {

    }

    useEffect(() => {
        if (carInfo) {
            if (isGlobalApi) {
            } else {
                console.log(carInfo?.shop?.branchIdx);
            }
        }
    }, [carInfo])
    return (
        <>
            <Row>
                { isGlobalApi
                ?
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row>
                            <StyleDescriptions title={'렌트카 업체 주요정보'} bordered>
                                <StyleDescriptions.Item label={'업체명'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'주소'} span={3}>부산 동구 중앙대로214번길 3-4 1층</StyleDescriptions.Item>

                                <StyleDescriptions.Item label={'연락처'} span={2}>위드렌터카 부산역점</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'영업시간'} >위드렌터카 부산역점</StyleDescriptions.Item>

                                <StyleDescriptions.Item label={'대여규정'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'취소규정'} span={3}>위드렌터카 부산역점</StyleDescriptions.Item>
                            </StyleDescriptions>
                        </Row>
                        <Row>
                            <StyleDescriptionsSecond layout="vertical" bordered>
                                <StyleDescriptionsSecond.Item
                                    label="가입 보험"
                                >
                                </StyleDescriptionsSecond.Item>
                            </StyleDescriptionsSecond>
                        </Row>
                    </Col>
                :
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Row>
                            <DefaultButton
                                style={{
                                    fontSize: '0.725rem',
                                    marginBottom: '1rem',
                                    // background: '#FFF',
                                    backgroundImage: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'
                                }}
                                onClick={() => onClickAffiliateInfo(carInfo)}
                                prefixIcons={<SelectOutlined />}
                                color={'#000'}
                                text={'업체 바로가기'}
                            />
                        </Row>
                        <Row>
                            <StyleDescriptions title={'렌트카 업체 주요정보'} bordered>
                                <StyleDescriptions.Item label={'업체명'} span={3}>{carInfo?.shop?.companyName} / {carInfo?.shop?.branchName}</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'주소'} span={3}>{carInfo?.shop?.branchAddress}</StyleDescriptions.Item>

                                <StyleDescriptions.Item label={'연락처'} span={2}>{carInfo?.shop?.branchTel}</StyleDescriptions.Item>
                                <StyleDescriptions.Item label={'영업시간'} >{carInfo?.shop?.openTime} ~ {carInfo?.shop?.closeTime}</StyleDescriptions.Item>

                                {/*<StyleDescriptions.Item label={'대여규정'} span={3}>업체 대여규정</StyleDescriptions.Item>*/}
                                {/*<StyleDescriptions.Item label={'취소규정'} span={3}>업체 취소규정</StyleDescriptions.Item>*/}
                            </StyleDescriptions>
                        </Row>
                        {/*<Row>*/}
                        {/*    <StyleDescriptionsSecond layout="vertical" bordered>*/}
                        {/*        <StyleDescriptionsSecond.Item*/}
                        {/*            label="가입 보험"*/}
                        {/*        >*/}
                        {/*        </StyleDescriptionsSecond.Item>*/}
                        {/*    </StyleDescriptionsSecond>*/}
                        {/*</Row>*/}
                    </Col>
                }
            </Row>
        </>
    )
}

export default ReservationDetailCar;

export const StyleDescriptions = styled(Descriptions)`
 width: 100%;
  tr {
    th {
      font-weight: bold;
    }
   
  }

  .ant-descriptions-item-label {
    padding: 10px 24px !important;
  }
  .ant-descriptions-item-content {
    padding: 10px 24px !important;
  }
`

export const StyleDescriptionsSecond = styled(Descriptions)`
  width: 100%;
  margin-top: 1rem;
 .ant-descriptions-item-label {
    width: 50%;
    background: #D8E9F5;
    text-align: center;
    font-weight: bold;
    height: 1rem;
 }

  .ant-descriptions-item-label {
    padding: 10px 24px !important;
  }
  .ant-descriptions-item-content {
    padding: 10px 24px !important;
  }
`


