import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const VendorService = {}
VendorService.findHotel = async (params) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping/supplier`;

    return await axios.get(host, { params });
}

VendorService.findHotelDetail = async (record) => {
    const host = `${HOTEL_HOST}/admin/hotels/${record.id}`;

    let params = {
        sourceSystem: record.supplierSystem,
    }

    return await axios.get(host, { params });
}

export default VendorService
