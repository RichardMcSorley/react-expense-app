import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import { setEndDate, setStartDate } from "./../actions/filters";

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    e = e.target.value;
    this.props.setTextFilter(e);
  };
  onSortChange = e => {
    e = e.target.value;
    switch (e) {
      case "date":
        this.props.sortByDate();
        break;
      case "amount":
        this.props.sortByAmount();
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onTextChange}
          value={this.props.filters.text}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setEndDate: startDate => dispatch(setStartDate(startDate)),
    setStartDate: endDate => dispatch(setEndDate(endDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
