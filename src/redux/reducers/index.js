import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Location from './Location';
import Loading from './Loading';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    location: Location,
    loading: Loading,
});

export default reducers;
