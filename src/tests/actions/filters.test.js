import {
    setStartDate,
    setEndDate,
    setSortByAmount,
    setSortByDate,
    setTextFilter
} from '../../actions/filters';
import moment from 'moment';
test('should set the text filter with provided value', () => {
    const text = 'test';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should set the text filter with default value', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set the start date filter', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should set the end date filter', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should set the sort by as date', () => {
    const result = setSortByDate();
    expect(result).toEqual({
        type: 'SET_SORT_BY_DATE'
    })
})

test('should set the sort by as amount', () => {
    const result = setSortByAmount();
    expect(result).toEqual({
        type: 'SET_SORT_BY_AMOUNT'
    })
})
