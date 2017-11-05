import React from 'react';
import { connect }from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" onChange={(e)=>{
            e = e.target.value;
            props.dispatch(setTextFilter(e));
        }} value={props.filters.text}/>
        <select value={props.filters.sortBy} onChange={(e)=>{
            e = e.target.value;
            switch (e) {
                case 'date':
                    props.dispatch(sortByDate())
                    break;
                case 'amount':
                    props.dispatch(sortByAmount())
                    break;
                default:
                    break;
            }
            
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);