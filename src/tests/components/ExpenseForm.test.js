import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from '../__mocks__/moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () =>{
    const value = 'new Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{target : {value}});
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on input change', () =>{
    const value = 'new Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{target : {value}, persist: () => {}});
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount on valid input change', () =>{
    const value = '1.23';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target : {value}});
    expect(wrapper.state('amount')).toBe(value);
})

test('should set amount on invalid input change', () =>{
    const value = 'abc';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target : {value}});
    expect(wrapper.state('amount')).toBe("");
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]}/>);
    wrapper.find('form').simulate('submit',{preventDefault: () => {}})
    expect(wrapper.state['error']).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt.valueOf()
    });
})

test('should set new date on date change',() => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focus on change',() => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
    expect(wrapper.state('calenderFocused')).toEqual(true)
})