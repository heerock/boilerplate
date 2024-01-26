import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const VendorService = {}
VendorService.findHotel = async (params) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping/supplier`;

    return await axios.get(host, { params });
}

export default VendorService
