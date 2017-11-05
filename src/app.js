import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import ReactDOM  from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import expenseSelector from './selectors/expenses';

const store = configureStore();

store.dispatch(expenseActions.addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(expenseActions.addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(expenseActions.addExpense({description: 'Rent', amount: 109400}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx, document.getElementById('app'))