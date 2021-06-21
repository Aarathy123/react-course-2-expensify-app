import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { setSortByDate } from '../../actions/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle ExpenseListFilters text change', () => {
    const value = altFilters.text;
    wrapper.find('input').simulate('change',{target : {value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    expect(wrapper).toMatchSnapshot();
})

test('should handle ExpenseListFilters set sort by date', () => {
    const value = 'date';
    wrapper.find('select').prop('onChange')({target : {value}})
    expect(sortByDate).toHaveBeenLastCalledWith();
    expect(wrapper).toMatchSnapshot();
})

test('should handle ExpenseListFilters set sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').prop('onChange')({target : {value}})
    expect(sortByAmount).toHaveBeenLastCalledWith();
    expect(wrapper).toMatchSnapshot();
})

test('should handle ExpenseListFilters date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    expect(wrapper).toMatchSnapshot();
})

test('should handle date focus change', () => {
    const calenderFocused = "endDate";
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toEqual(calenderFocused)
})