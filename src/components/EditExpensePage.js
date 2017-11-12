import { connect } from "react-redux";
import { startRemoveExpense, startEditExpense } from "./../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import React, { Component } from "react";

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
