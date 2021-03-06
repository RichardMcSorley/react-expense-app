import { ExpenseList } from "./../../components/ExpenseList";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import React from "react";

test("should render ExpenseList correctly", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
