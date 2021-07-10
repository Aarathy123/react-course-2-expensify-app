import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseSummary} from "../../components/ExpenseSummary";

test('should render correctly expensesSummary with one Expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={100}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render correctly expensesSummary with multiple Expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={10900}/>)
    expect(wrapper).toMatchSnapshot();
})