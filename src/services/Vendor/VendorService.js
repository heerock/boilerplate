import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';
import MasterService from "../Master/MasterService";

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

VendorService.findHotelSetting = async (params) => {
    const host = `${HOTEL_HOST}/admin/hotels/management/supplier`;

    return await axios.get(host, { params });
}

VendorService.mappedChange = async (record, masterHotelId) => {
    const host = `${HOTEL_HOST}/admin/hotels/mapping`;

    if (record.isMapped) {
        return await axios.delete(host, {
            data: {
                masterHotelId: masterHotelId,
                supplierHotelId: record.id,
            }
        })
    }

    return await axios.post(host, {
        masterHotelId: masterHotelId,
        supplierHotelId: record.id,
    })
}

VendorService.getMarkupVendorSystems = async () => {
    const host = `${HOTEL_HOST}/admin/markup/supplier`;

    return await axios.get(host, {});
}

VendorService.updatedMarkupVendorSystem = async (data) => {
    const host = `${HOTEL_HOST}/admin/markup/supplier`;

    return await axios.patch(host, {}, {
        params: {
            supplierSystem: data.record.supplierSystem,
            markupRate: data.rate,
        }
    })
}

VendorService.getMarkupHotels = async (params) => {
    const host = `${HOTEL_HOST}/admin/markup/hotels`;

    return await axios.get(host, { params });
}

VendorService.updatedMarkupHotel = async (data) => {
    const host = `${HOTEL_HOST}/admin/markup/hotels/${data.record.id}`;

    return await axios.patch(host, {},{
        params: {
          supplierSystem: data.record.supplierSystem,
          markupRate: data.rate,
        },
    })
}

export default VendorService
