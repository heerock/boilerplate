import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const LocationTokenService = {}
LocationTokenService.country = async (key) => {
    const host = `${HOTEL_HOST}/admin/supplier/filter`;

    return await axios.get(host, { params: { supplierSystem: key } });
}

export default LocationTokenService
