import expenserReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {
    createStore,
    combineReducers
} from 'redux';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenserReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
