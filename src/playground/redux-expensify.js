import {
    addExpense,
    editExpense,
    removeExpense
} from '../actions/expenses';
import {
    setSortByAmount,
    setSortByDate,
    setEndDate,
    setStartDate,
    setTextFilter
} from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';
import store from '../store/configureStore'; 

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({
    description: 'rent',
    amount: 100,
    createdAt: -21000
}));
const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 10,
    createdAt: -1000
}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}));
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setSortByDate());
store.dispatch(setSortByAmount());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'aaaa',
        description: 'January Rent',
        note: 'This was the final paymeny',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'RentValue',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};