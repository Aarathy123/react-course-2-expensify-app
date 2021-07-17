import moment from "moment"
export default  [{
    id: '1',
    description: 'Gum',
    notes: '',
    amount: 196,
    createdAt: moment().valueOf()
},
{
    id: '2',
    description: 'Rent',
    notes: '',
    amount: 19632,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'Credit card',
    notes: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}]