import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink exact activeClassName="is-active" to="/"> Home </NavLink>
            <NavLink activeClassName="is-active"  to="/create"> Create </NavLink>
            <NavLink activeClassName="is-active"  to="/edit"> Edit </NavLink>
            <NavLink activeClassName="is-active"  to="/help"> Help </NavLink>
        </div>
    </header>
)

export default Header;