import expensesReducer from "../../reducers/expenses";
import expenses from "./../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Gum x2",
    note: "added just now",
    amount: 295,
    createdAt: 900
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const updates = {
    id: expenses[0].id,
    description: "Gum x2",
    note: "added just now",
    amount: 295,
    createdAt: 900
  };
  const action = {
    type: "EDIT_EXPENSE",
    updates,
    id: "1"
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(updates);
});

test("should not edit an expense if id not found", () => {
  const updates = {
    id: expenses[0].id,
    description: "Gum x2",
    note: "added just now",
    amount: 295,
    createdAt: 900
  };
  const action = {
    type: "EDIT_EXPENSE",
    updates,
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("shoud set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
