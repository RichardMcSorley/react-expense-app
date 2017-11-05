import React, {Component} from 'react';
import { connect }from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { setEndDate, setStartDate } from './../actions/filters';

class ExpenseListFilters extends Component{
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({calendarFocused}))
    }
    render(){
        return (
            <div>
                <input type="text" onChange={(e)=>{
                    e = e.target.value;
                    this.props.dispatch(setTextFilter(e));
                }} value={this.props.filters.text}/>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    e = e.target.value;
                    switch (e) {
                        case 'date':
                            this.props.dispatch(sortByDate())
                            break;
                        case 'amount':
                            this.props.dispatch(sortByAmount())
                            break;
                        default:
                            break;
                    }
                    
                }}>
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
                    isOutsideRange={()=> false}
                    showClearDates={true}
                /> 
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);