import { ExpenseSummary } from "./../../components/ExpenseSummary";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import getTotals from "../../selectors/totals";
import React from "react";

let expenseCount, expensesTotal, wrapper;

beforeEach(() => {
  expenseCount = expenses.length;
  expensesTotal = getTotals(expenses);
  wrapper = shallow(
    <ExpenseSummary expenseCount={expenseCount} expensesTotal={expensesTotal} />
  );
});

test("should render ExpenseSummary with multple expenses", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with 1 expense", () => {
  wrapper.setProps({
    expenseCount: 1,
    expensesTotal: getTotals([expenses[0]])
  });
  expect(wrapper).toMatchSnapshot();
});
