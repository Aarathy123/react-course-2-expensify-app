import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral';

export const ExpenseSummary =  ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount == 1 ? 'expense' : 'expenses'; 
    return (
        <p>Viewing {expenseCount} {expenseWord} 
        <span>
        {(expenseCount) > 0 && (` totalling ${numeral(expenseTotal/100).format('$0.00')}`)}
        </span>
        </p>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
};
export default connect(mapStateToProps)(ExpenseSummary);