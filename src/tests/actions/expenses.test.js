import {
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startAddExpense,
  startEditExpense,
  startRemoveExpense,
  startSetExpenses,
} from "./../../actions/expenses";
import configureMockStore from "redux-mock-store";
import db from "../../firebase/firebase";
import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";

const uid = 'testuid';
const createMockStore = configureMockStore([thunk]);
const defaultAuthState =  {auth: { uid: uid }};
beforeEach(done => {
  let expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  db
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => {
      done();
    });
});

test("should setup remove expense aciton object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense aciton object", () => {
  const action = editExpense("123abc", { id: "123" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      id: "123"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "this was last months rent"
  };
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this one is better",
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", () => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("should remove expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const { id } = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });
      return db.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snap => {
      expect(snap.val()).toBeFalsy();
      done();
    });
});

test("should edit expenses on firebase", done => {
  const store = createMockStore(defaultAuthState);
  const { id } = expenses[0];
  const expense = {
    amount: 195,
    createdAt: 0,
    description: "Gum",
    note: ""
  };
  const updates = { note: "woohoo" };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
      });
      return db.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snap => {
      expect(snap.val()).toEqual({
        amount: 195,
        createdAt: 0,
        description: "Gum",
        note: "woohoo"
      });
      done();
    });
});
