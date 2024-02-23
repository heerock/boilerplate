import axios from '../../auth/AxiosInterceptor'
import { HOTEL_HOST } from '../../configs/HostConfig';

const SaleService = {}
SaleService.saleChange = async (record) => {
    const host = `${HOTEL_HOST}/admin/hotels/${record.id}/sale`;
    let sourceSystem = record?.masterSystem || record?.supplierSystem

    if (record.isSale) {
        return await axios.delete(host, {
            data: {
              sourceSystem: sourceSystem,
            }
        })
    }

    return await axios.patch(host, {
        sourceSystem: sourceSystem,
    })
}

export default SaleService
