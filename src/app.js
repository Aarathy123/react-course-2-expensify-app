import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)
ReactDOM.render( jsx, document.getElementById("app"));