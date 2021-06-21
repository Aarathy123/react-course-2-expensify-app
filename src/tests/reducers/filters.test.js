import { stat } from 'fs';
import moment from 'moment';
import { exp } from 'prelude-ls';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SET_SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SET_SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0))
})

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})

test('should set text filter', () => {
    const text = 'test';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text})
    expect(state.text).toEqual(text)
})