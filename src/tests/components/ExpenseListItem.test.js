import { shallow } from "enzyme";
import ExpenseListItem from "./../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import React from "react";

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
