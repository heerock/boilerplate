import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST, RENTCAR_HOST } from '../../configs/HostConfig';

const ReservationService = {}
ReservationService.findReservationList = async (params) => {
    const host = `${HOTEL_HOST}/admin/reservations`;

    return await axios.get(host, { params });
}

ReservationService.findReservationDetail = async (id) => {
    const host = `${HOTEL_HOST}/admin/reservations/${encodeURIComponent(id)}`;

    return await axios.get(host);
}

ReservationService.findReservationDetailCar = async (id, isGlobalApi) => {
    const host = `${RENTCAR_HOST}/admin/reservation/${encodeURIComponent(id)}`;

    return await axios.get(host, { params: {
        ia: 'Y',
        apiType: isGlobalApi ? 'GLOBAL' : 'CARMORE'
    }});
}

export default ReservationService
