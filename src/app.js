import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM  from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import expenseSelector from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx, document.getElementById('app'))