import React, { useState, useEffect } from 'react';
import {Col, Row, Typography, Spin, Tabs} from 'antd';
import ReservationFullStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationFullStatusBadgeDiv";
import DefaultDivider from "../../../../../../components/shared-components/hotel/Divider/DefaultDivider";
import {ADMIN_HOST} from "../../../../../../configs/HostConfig";
import DefaultButton from "../../../../../../components/shared-components/hotel/Button/DefaultButton";
import FamilyLoungeBadgeDiv from "../../../../../../components/shared-components/hotel/Div/FamilyLoungeBadgeDiv";
import ReservationCarStatusBadgeDiv
    from "../../../../../../components/shared-components/hotel/Div/ReservationCarStatusBadgeDiv";
import Utils from "../../../../../../utils";
const { Title, Text } = Typography;

const ReservationCarInformation = (props) => {
    const [insurances, setInsurances] = useState([]);
    const { record, carInfo, isGlobalApi } = props;

    console.log('carInfo : ', carInfo)

    useEffect(() => {
        if (carInfo && isGlobalApi) {
            const insurances = [];
            carInfo.car.insurance.coverage.filter((insurance) => insurance.subInsurances.length > 0)
                .forEach((insurance) =>
                    insurance.subInsurances.forEach((sub) => {
                        insurances.push(sub.title);
                    })
                )

            setInsurances(insurances)
        }
    }, [carInfo])

    return (
        <>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row style={{ display: 'inline-flex', alignItems: 'center', padding: '0rem 0.4rem' }}>
                    <Title level={4} style={{ fontWeight: 'bold', fontSize: '1rem', margin: '0', marginRight: '0.225rem' }}>차량 대여정보</Title>
                    <ReservationCarStatusBadgeDiv status={record?.reservationCar.status}/>
                </Row>

                <DefaultDivider style={{ border: '1px solid rgba(233, 233, 233, 1)' }}/>
                { isGlobalApi
                    ?
                    <Col style={{ margin: '0 auto', padding: '0rem 0.4rem' }}>
                        <Row>
                            <Text style={{ marginRight: '0.225rem' }}>렌트카 예약번호 : </Text>
                            <Text style={{ fontWeight: 'bold' }}>{record?.reservationCar.carReservationNumber}</Text>
                        </Row>
                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid', fontSize: '0.785rem' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>대표 운전자 이름 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.reservation?.driverName}</Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>휴대폰 번호 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.reservation?.driverContact}</Text>
                            </Row>
                        </Row>

                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid', fontSize: '0.785rem' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}></Text>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold', fontSize: '0.825rem' }}>
                                    {carInfo?.car?.model}
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>
                                    {`${carInfo?.car?.transmissionType} / `}
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>보상정책 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>
                                    {carInfo?.car?.insurance?.coveragePackage}
                                </Text>
                            </Row>
                            <Row>
                                <Row>
                                    <Text style={{ marginRight: '0.225rem' }}>상세보상 : </Text>
                                </Row>
                                <Row>
                                    {
                                        insurances.length > 0 &&
                                        insurances.map((insurance) =>
                                            <Row key={insurance}>
                                                <Text style={{ fontSize: '0.785rem', marginRight: '0.225rem' }}>•</Text>
                                                <Text style={{ marginRight: '0.225rem' }}>
                                                    {insurance}
                                                </Text>
                                            </Row>
                                        )
                                    }
                                </Row>
                            </Row>
                        </Row>

                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold', fontSize: '0.785rem' }}>{carInfo?.reservation?.rentStartDatetime} ~ {carInfo?.reservation?.rentEndDatetime}</Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>한국어 이름 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.reservation?.koreanName}</Text>
                            </Row>
                        </Row>
                        <DefaultDivider />

                        <Row gutter={[0, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold' }}>{carInfo?.shop?.companyName}</Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.shop?.branchName}</Text>
                            </Row>
                        </Row>
                    </Col>
                    :
                    <Col style={{ margin: '0 auto', padding: '0rem 0.4rem' }}>
                        <Row>
                            <Text style={{ marginRight: '0.225rem' }}>렌트카 예약번호 : </Text>
                            <Text style={{ fontWeight: 'bold' }}>{record?.reservationCar.carReservationNumber}</Text>
                        </Row>
                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid', fontSize: '0.785rem' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>대표 운전자 이름 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.car?.driverInfo?.name}</Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>휴대폰 번호 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.car?.driverInfo?.phone}</Text>
                            </Row>
                        </Row>

                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid', fontSize: '0.785rem' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}></Text>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold', fontSize: '0.825rem' }}>
                                    {carInfo?.car?.rentcarInfo?.carModel}
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>
                                    {
                                      `${carInfo?.car?.rentcarInfo?.transmission} / ${carInfo?.car?.cdwInfo?.cdwName} / ${carInfo?.car?.rentcarInfo?.minYear}-${carInfo?.car?.rentcarInfo?.maxYear} / ${Utils.getFuelTypeChange(carInfo?.car?.rentcarInfo?.fuel)}`
                                    }
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>보상정책 : </Text>
                                <Text style={{ marginRight: '0.225rem' }}>
                                    {carInfo?.car?.cdwInfo?.carmoreCdwName && Utils.getCdwTypeChange(carInfo.car.cdwInfo.carmoreCdwName)}
                                </Text>
                            </Row>
                        </Row>

                        <DefaultDivider />
                        <Row gutter={[0, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold', fontSize: '0.785rem' }}>{carInfo?.car?.startDate} ~ {carInfo?.car?.endDate}</Text>
                            </Row>
                        </Row>
                        <DefaultDivider />

                        <Row gutter={[0, 0]} style={{ display: 'grid' }}>
                            <Row>
                                <Text style={{ marginRight: '0.225rem', fontWeight: 'bold' }}>{carInfo?.car?.branchInfo?.companyName}</Text>
                            </Row>
                            <Row>
                                <Text style={{ marginRight: '0.225rem' }}>{carInfo?.car?.branchInfo?.branchName}</Text>
                            </Row>
                        </Row>

                    </Col>
                }
            </Col>
        </>
    )
}

export default ReservationCarInformation
