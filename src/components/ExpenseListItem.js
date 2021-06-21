import React from 'react'
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description,amount,createdAt,id}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>Description : {description}</h3>
        <p>{amount} - {createdAt}</p>
        </Link>
    </div>
)

export default ExpenseListItem;
