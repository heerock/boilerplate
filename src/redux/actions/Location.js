import {
    MAPPING_COUNTRIES,
    MAPPING_COUNTRIES_OPTION
} from '../constants/Location';

export const mappingCountriesAction = (countries) => {
    return {
        type: MAPPING_COUNTRIES,
        payload: countries,
    }
};

export const mappingCountriesOptionAction = (options) => {
    return {
        type: MAPPING_COUNTRIES_OPTION,
        payload: options,
    }
}
