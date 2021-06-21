import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([]);
})

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove an expense by id not fund', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Coffee',
        notes: '',
        amount: 1632,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const updates = {
        id: '3',
        description: 'Coffee',
        notes: '',
        amount: 1632,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: '3'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], {...expenses[2], ...updates}])
})

test('should not edit an expense if id not found', () => {
    const updates = {
        description: 'Coffee',
        notes: '',
        amount: 1632,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: '4'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})