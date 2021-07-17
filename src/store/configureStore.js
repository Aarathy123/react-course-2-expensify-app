import expenserReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhances = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenserReducer,
            filters: filtersReducer
        }),
        composeEnhances(applyMiddleware(thunk))
    );
    return store;
}
