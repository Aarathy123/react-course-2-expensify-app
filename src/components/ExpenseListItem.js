import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description,amount,createdAt,id}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>Description : {description}</h3>
        <p>
            {numeral((amount)/100).format("$0.00")} 
            - 
            {moment(createdAt).format("MMMM Do, YYYY")}
        </p>
        </Link>
    </div>
)

export default ExpenseListItem;
