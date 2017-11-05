import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));
export default class ExpenseForm extends Component {
    onDescriptionChange = ({target}) => {
        this.setState(()=>({ description: target.value }));
    };
    onAmountChange = ({target}) => {
        const {value} = target;
        if(value.match(/^\d*(\.\d{0,2})?$/)){

            this.setState(()=>({ amount: value }));
        }
        
    };
    onNoteChange = ({target}) => {
        this.setState(()=>({ note: target.value }));
    }
    onDateChange = (createdAt)=>{
        this.setState(()=>({createdAt}))
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused: focused}))
    }
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false
        };
  render() {
    return (
      <div>
        <form>
            <input
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
            />
            <input 
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
            />
            <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={(day)=> false}
            />
            <textarea
                placeholder="Add a note for your expense (optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
            >
            </textarea>
            <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
