import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const ReservationService = {}
ReservationService.findReservationList = async (params) => {
    const host = `${HOTEL_HOST}/admin/reservations`;

    return await axios.get(host, { params });
}

ReservationService.findReservationDetail = async (id) => {
    const host = `${HOTEL_HOST}/admin/reservations/${encodeURIComponent(id)}`;

    return await axios.get(host);
}

export default ReservationService
