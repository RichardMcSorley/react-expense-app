import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import ExpoenseListFilters from "./ExpenseListFilters";
import React from "react";

const DashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpoenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
