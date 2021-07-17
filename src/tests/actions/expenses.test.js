import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import { startAddExpense, setExpenses, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);
import {startSetExpenses} from '../../actions/expenses'

beforeEach(() => {
    const expenseData = {};
    expenses.forEach(({id, description, notes, amount, createdAt}) => {
        expenseData[id] = {description,notes,amount, createdAt};
    })
    database.ref('expenses').set(expenseData).then(() => done())
})

test('should set up remove expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        expense:{id: '123abc'},
        type: 'REMOVE_EXPENSE'
    })
})

test('should set up edit expense action', () => {
    const action = editExpense('abc123',{note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {note: 'New note value'}
    })
})

test('should set up add expense with provided value', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description : 'Mouse',
        amount: 1200,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test('should setup set expense action object', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'SET_EXPENSES',
           expenses
       })
       done();
    })
})