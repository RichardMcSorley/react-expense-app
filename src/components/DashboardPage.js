import React from 'react';
import ExpenseList from './ExpenseList';
import ExpoenseListFilters from './ExpenseListFilters';


const DashboardPage = () => (
    <div>
        <ExpoenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;