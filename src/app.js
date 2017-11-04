import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import ReactDOM  from 'react-dom';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'))