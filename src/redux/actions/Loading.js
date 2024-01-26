import {
    LOADING_TRUE,
    LOADING_FALSE,
} from '../constants/Loading';

export const loadingTrueAction = (countries) => {
    return {
        type: LOADING_TRUE,
    }
};

export const loadingFalseAction = (options) => {
    return {
        type: LOADING_FALSE,
    }
}
