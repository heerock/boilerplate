import React, { useState, useEffect } from 'react';
import { Col, Row, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import moment from 'moment';
import PageHeader from 'components/shared-components/PageHeader/PageHeader';
import SearchFilter from './SearchFilter';
import ReservationListTable from './ReservationListTable';
import ReservationService from '../../../../../services/Reservation/ReservationService';
import { ReservationDermy } from './dermy/ReservationDermy';
import { RESERVATION_FILTER_OPTIONS } from '../../../../../constants/ReservationConstant';

const { Text } = Typography;


const ReservationList = () => {
    const now = moment().format('YYYY-MM-DD');
    const [reservations, setReservations] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchRegion, setSearchRegion] = useState('ALL');
    const [isPackage, setIsPackage] = useState(false);
    const [customerIssueExist, setCustomerIssueExist] = useState(false);
    const [paymentDate, setPaymentDate] = useState(null);
    const [cancelDate, setCancelDate] = useState(null);
    const [fullStatuses, setFullStatuses] = useState([]);
    const [searchHotelStatuses, setSearchHotelStatuses] = useState([]);
    const [carStatuses, setCarStatuses] = useState([]);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [filterValue, setFilterValue] = useState('RESERVATION_NUMBER');
    const [filterOptions, setFilterOptions] = useState([
        { label: '예약번호', value: 'RESERVATION_NUMBER' },
        { label: '예약자명', value: 'BOOKER_NAME' },
        { label: '호텔명', value: 'HOTEL_NAME' },
    ]);
    const [params, setParams] = useState({
        page: 1,
        pageSize: 10,
        searchRegion: searchRegion,
    });

    const getFetch = async (params) => {
        const { success, reservations, pagination } = await getReservationList(params)

        if (success) {
            setReservations(reservations)
            setPagination(pagination)
        }
    }

    const onChangePage = (nPage, nPageSize) => {
        if (params.page !== nPage) setParams(params => ({...params, page: nPage}))
        if (params.pageSize !== nPageSize) setParams(params => ({...params, pageSize: nPageSize}));
    }

    const getReservationList = async (params) => {
        return await ReservationService.findReservationList(params);
    }

    const onSearch = (value, _e, info) => {
        let set_params = {
            page: 1,
            pageSize: params.pageSize,
        };

        if (value && value !== '') {
            if (filterValue === RESERVATION_FILTER_OPTIONS.RESERVATION_NUMBER) {
                set_params['reservationNumber'] = value;
            } else if (filterValue === RESERVATION_FILTER_OPTIONS.BOOKER_NAME) {
                set_params['bookerName'] = value;
            } else if (filterValue === RESERVATION_FILTER_OPTIONS.HOTEL_NAME) {
                set_params['hotelName'] = value;
            }
        }

        if (isPackage) set_params['isPackage'] = isPackage;
        if (searchRegion) set_params['searchRegion'] = searchRegion ;
        if (customerIssueExist) set_params['customerIssueExist'] = customerIssueExist ;
        if (paymentDate) set_params['paymentDate'] = paymentDate ;
        if (cancelDate) set_params['cancelDate'] = cancelDate ;

        if (carStatuses && carStatuses.length > 0) set_params['carStatuses'] = carStatuses.join();
        if (searchHotelStatuses && searchHotelStatuses.length > 0) set_params['searchHotelStatuses'] = searchHotelStatuses.join();
        if (fullStatuses && fullStatuses.length > 0) set_params['fullStatuses'] = fullStatuses.join();

        if (checkInDate) set_params['checkInDate'] = checkInDate;
        if (checkOutDate) set_params['checkOutDate'] = checkOutDate;

        setParams(set_params)
    }

    useEffect(() => {
        if (cancelDate) {

        }
    }, [cancelDate])

    useEffect(() => {
        setLoading(true)
        let _params = {...params}

        Promise.allSettled([getFetch(_params)]).then(() => setLoading(false))
    }, [params])

    return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row>
                        <PageHeader level={2} title={'호텔 예약 관리'}/>
                    </Row>
                    <Row>
                        <SearchFilter
                            onSearch={onSearch}
                            searchRegion={searchRegion}
                            setSearchRegion={setSearchRegion}
                            filterOptions={filterOptions}
                            filterValue={filterValue}
                            setFilterValue={setFilterValue}
                            setIsPackage={setIsPackage}
                            isPackage={isPackage}
                            customerIssueExist={customerIssueExist}
                            setCustomerIssueExist={setCustomerIssueExist}
                            checkInDate={checkInDate}
                            setCheckInDate={setCheckInDate}
                            checkOutDate={checkOutDate}
                            setCheckOutDate={setCheckOutDate}
                            paymentDate={paymentDate}
                            setPaymentDate={setPaymentDate}
                            cancelDate={cancelDate}
                            setCancelDate={setCancelDate}
                            searchHotelStatuses={searchHotelStatuses}
                            setSearchHotelStatuses={setSearchHotelStatuses}
                            carStatuses={carStatuses}
                            setCarStatuses={setCarStatuses}
                            fullStatuses={fullStatuses}
                            setFullStatuses={setFullStatuses}
                        />
                    </Row>
                    <Row gutter={[8, 8]} style={{ marginTop: '1.825rem', display: 'block' }}>
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
                            <ReservationListTable
                                data={reservations}
                                setData={setReservations}
                                page={params.page}
                                pageSize={params.pageSize}
                                onChange={onChangePage}
                                pagination={pagination}
                            />
                        </Spin>
                    </Row>
				</Col>
			</Row>
		</>
	)
}

export default ReservationList
