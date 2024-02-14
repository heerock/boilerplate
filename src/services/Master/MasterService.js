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

MasterService.findHotelDetail = async (record) => {
    const host = `${HOTEL_HOST}/admin/hotels/${record.id}`;

    let params = {
        sourceSystem: record.masterSystem,
    }

    console.log('record : ', record)

    if ('mappedHotelId' in record && record.mappedHotelId && record.mappedHotelId.length > 0) {
        params = {
            ...params,
            mappedHotelId: record.mappedHotelId[0],
        }
    }

    return await axios.get(host, { params });
}

export default MasterService
