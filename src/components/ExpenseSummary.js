import { connect } from "react-redux";
import getTotals from "../selectors/totals";
import numeral from "numeral";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class ExpenseSummary extends Component {
  render() {
    const expenseWord = this.props.expenseCount === 1 ? "expense" : "expenses";
    const formatTotal = numeral(this.props.expensesTotal / 100).format(
      "$0,0.00"
    );
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
            Viewing <span>{this.props.expenseCount} {expenseWord}</span> totalling{" "}
            <span>{formatTotal}</span>
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenseCount: state.expenses.length,
    expensesTotal: getTotals(state.expenses)
  };
};
export default connect(mapStateToProps)(ExpenseSummary);
