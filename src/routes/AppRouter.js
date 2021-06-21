import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpExpensePage from '../components/HelpExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;