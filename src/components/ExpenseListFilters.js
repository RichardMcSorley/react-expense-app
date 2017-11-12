import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setEndDate, setStartDate } from "./../actions/filters";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
import React, { Component } from "react";

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
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              placeholder="Search Expenses"
              className="text-input"
              onChange={this.onTextChange}
              value={this.props.filters.text}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
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
        </div>
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
