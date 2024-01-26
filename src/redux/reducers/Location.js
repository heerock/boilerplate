import {
    MAPPING_COUNTRIES,
    MAPPING_COUNTRIES_OPTION,
} from '../constants/Location';

const initState = {
    mappingCountries: [],
    mappingCountriesOption: [],
}

const location = (state = initState, action) => {
    switch (action.type) {
        case MAPPING_COUNTRIES:
            return {
                ...state,
                mappingCountries: action.payload,
            }
        case MAPPING_COUNTRIES_OPTION:
            return {
                ...state,
                mappingCountriesOption: action.payload,
            }
        default:
            return state;
    }
}

export default location
