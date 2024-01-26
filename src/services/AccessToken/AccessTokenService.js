import axios from 'axios'

const AccessTokenService = {}
// const host = `https://dev.carmore.kr/home/php/decodeAccess.php`;
AccessTokenService.decode = async (key) => {
    try {
        const host = `https://dev-common-api.carmore.kr/token/${encodeURIComponent(key)}`;
        const result = await axios.get(host);
        return result.data
    } catch (error) {
        throw new Error(error);
    }
}

export default AccessTokenService
