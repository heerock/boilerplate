import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Spin, Tabs, Descriptions } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import ReservationService from '../../../../../services/Reservation/ReservationService';
import ReservationDetailAll from "./ReservationDetailAll";
import ReservationDetailHotel from "./ReservationDetailHotel";
import ReservationDetailCar from "./ReservationDetailCar";
import HotelDetailModal from "../../mapping/hotel/modal/HotelDetailModal";
import ReservationManage from "./ReservationManage";
import Utils from "../../../../../utils";

const { Title, Text } = Typography;

const ReservationDetail = () => {
    const { reservationId } = useParams();
	const [tabs, setTabs] = useState([
		{ label: `전체`, key: `ALL`},
	]);
	const [selectedKey, setSelectedKey] = useState(`ALL`);
	const [loading, setLoading] = useState(false);
	const [reservation, setReservation] = useState(null);
	const [car, setCar] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDetailRecord, setSelectedDetailRecord] = useState(null);
	const [isGlobalApi, setIsGlobalApi] = useState(false);

	const onChange = (key) => {
		setSelectedKey(key);
	};

	const getFetch = async (id) => {
		const response = await getReservationDetail(id);
		let isGlobalApi = false;
		setIsGlobalApi(false);

		if (!response.success) {
			return
		}

		if (response.isPackage) {
			setTabs([
				{ label: `전체`, key: `ALL`},
				{ label: `호텔`, key: `HOTEL`},
				{ label: `렌트카`, key: `RENTCAR`},
			])
		} else {
			setTabs([
				{ label: `전체`, key: `ALL`},
				{ label: `호텔`, key: `HOTEL`},
			])
		}

		setReservation(response);

		if (response?.reservationCar) {

			if (Utils.isGlobalType(response.reservationCar.carReservationNumber)) {
				isGlobalApi = true;
				setIsGlobalApi(true);
			}

			const { result } = await getReservationCarDetail(response.reservationCar.carReservationKey, isGlobalApi);

			if (result) {
				for (const [key, value] of Object.entries(result)) {
					if (value) {
						if (key === 'GLOBAL') {
							setCar({
								type: key,
								car: value.result.car,
								shop: value.result.shop,
								reservation: value.result.reservation,
							})
						} else {
							setCar({
								type: key,
								car: value.information,
								shop: value.store,
								reservation: value.reservation,
							})
						}
					}
				}
			}
		}
	}

	const getReservationDetail = async (id) => {
		return await ReservationService.findReservationDetail(id);
	}

	const getReservationCarDetail = async (id, isGlobalApi = false) => {
		return await ReservationService.findReservationDetailCar(id, isGlobalApi)
	}

	const detailViewOnClick = (record) => {
		setSelectedDetailRecord(record)
		setIsModalOpen(!isModalOpen)
	}

	const customerIssuedSave = async (memo) => {
		if (reservationId) {
			const response = await setReservationIssuedSave(reservationId, memo);

			if (!'success' in response) {
				return;
			}

			setLoading(true)
			Promise.allSettled([getFetch(reservationId)]).then(() => setLoading(false))
		}
	}

	const setReservationIssuedSave = async (id, issueMemo) => {
		return await ReservationService.customerIssueSave(id, issueMemo);
	}


	useEffect(() => {
		setLoading(true)
		Promise.allSettled([getFetch(reservationId)]).then(() => setLoading(false))
	}, [])

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 상세 정보'}/>
                    </Row>
                    <Row>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<Spin
								spinning={loading}
								tip={'로딩중..'}
								indicator={
									<LoadingOutlined
										style={{
											fontSize: '4rem',
										}}
										spin
									/>
								}
							>
								<Tabs
									onChange={onChange}
									type="card"
									items={tabs}
									activeKey={selectedKey}
									defaultActiveKey={`ALL`}
								/>

								{
									selectedKey === 'ALL' ? <ReservationDetailAll record={reservation} carInfo={car} isGlobalApi={isGlobalApi}/> :
										selectedKey === 'HOTEL' ?
											<ReservationDetailHotel record={reservation} onClick={detailViewOnClick}/>
											:
											<ReservationDetailCar
												record={car}
												carInfo={car}
												isGlobalApi={isGlobalApi}
											/>
								}

								{
									selectedKey === 'ALL' &&
									<>
										<ReservationManage record={reservation} customerIssuedSave={customerIssuedSave} />
									</>
								}
							</Spin>
						</Col>
                    </Row>
				</Col>
			</Row>


			<HotelDetailModal
				isModalOpen={isModalOpen}
				selectedDetailRecord={selectedDetailRecord}
				setIsModalOpen={setIsModalOpen}
				type={'MASTER'}
			/>
		</>
	)
}

export default ReservationDetail
