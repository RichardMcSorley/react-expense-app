import filterReducer from "../../reducers/filters";
import moment from "moment";
import { setEndDate } from "./../../actions/filters";

test("should setup default filter value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "woo";
  const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text });
  expect(state.text).toBe("woo");
});

test("should set start date filter", () => {
  const startDate = moment().startOf("month");
  const state = filterReducer(undefined, { type: "SET_START_DATE", startDate });
  expect(state.startDate).toBe(startDate);
});

test("should set end date filter", () => {
  const endDate = moment().endOf("month");
  const state = filterReducer(undefined, { type: "SET_END_DATE", endDate });
  expect(state.endDate).toBe(endDate);
});
