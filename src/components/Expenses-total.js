import moment from 'moment';
import selectExpensesTotal from '../selectors/expenses-total'
const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 100,
    createdAt: '0'
},
{
    id: 2,
    description: 'Rent',
    note: '',
    amount: 10065,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: 3,
    description: 'Credit Card',
    note: '',
    amount: 10430,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

const total = selectExpensesTotal(expenses);
console.log(total);

