import React from 'react';
import ExpenseList from './ExpenseList';
import ExpoenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';


const DashboardPage = () => (
    <div>
        <ExpoenseListFilters />
        <ExpenseList />
        <ExpenseSummary />
    </div>
);

export default DashboardPage;