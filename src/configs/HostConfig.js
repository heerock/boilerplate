import { env } from './EnvironmentConfig';

const HOST = {
    ADMIN: { dev: 'https://dev-admin.carmore.kr', prod: 'https://admin.carmore.kr', stg: '' },
    COMMON: { dev: 'https://dev-common-api.carmore.kr', prod: '', stg: '' },
    CARMORE: { dev: 'https://dev.carmore.kr', prod: '', stg: '' },
    HOTEL: { dev: 'https://dev-api.hotelmore.kr', prod: '', stg: '' }
}

export const ADMIN_HOST = HOST.ADMIN[env];

export const COMMON_HOST = HOST.COMMON[env];

export const CARMORE_HOST = HOST.CARMORE[env];

export const HOTEL_HOST = HOST.HOTEL[env];
