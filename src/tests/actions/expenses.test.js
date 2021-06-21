import { number } from "yargs";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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

test('should set up add expense with default value', () => {
    const expenseData = {
        description : '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const result = addExpense();
    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense: {...expenseData,
        id: expect.any(String)
        }
    })
})

test('should set up add expense with provided value', () => {
    const expenseData = {
        description : 'Rent',
        amount: 190,
        createdAt: 1000,
        note: 'Some Note'
    }
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String) 
        }
    })
})
