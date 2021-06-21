import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter'
import {
    addExpense
} from './actions/expenses';
import {
    setSortByAmount,
    setTextFilter
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 4500,
}));
store.dispatch(addExpense({
    description: 'Gas Bill',
    createdAt:1000
}));
store.dispatch(addExpense({
    description: 'Rent',
    amount:195
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)
ReactDOM.render( jsx, document.getElementById("app"));