import numeral from "numeral";
import React, { Component } from "react";
import { connect } from "react-redux";
import getTotals from "../selectors/totals";

export class ExpenseSummary extends Component {
  render() {
    const expenseWord = this.props.expenseCount === 1 ? "expense" : "expenses";
    const formatTotal = numeral(this.props.expensesTotal / 100).format(
      "$0,0.00"
    );
    return (
      <div>
        <h1>
          Viewing {this.props.expenseCount} {expenseWord} totalling{" "}
          {formatTotal}
        </h1>
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
