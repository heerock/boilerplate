import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const LogService = {}
LogService.findByHotelId = async (id, params) => {
    const host = `${HOTEL_HOST}/admin/hotels/${id}/log`;

    return await axios.get(host, { params });
}

LogService.findMarkupHotelByHotelId = async (params) => {
    const host = `${HOTEL_HOST}/admin/markup/log`;

    return await axios.get(host, { params });
}

export default LogService
