import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from './../../components/EditExpensePage';

let onSubmit, history, wrapper, editExpense, removeExpense;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} editExpense={editExpense} history={history}/>);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});