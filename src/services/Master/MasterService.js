import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const MasterService = {}
MasterService.findMasterHotel = async (params) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping/master`;

    return await axios.get(host, { params });
}

MasterService.insertMappingHotel = async (data) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping`

    return await axios.post(host, { ...data });
}

MasterService.deleteMappingHotel = async (data) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping`

    return await axios.delete(host, { data });
}

export default MasterService
