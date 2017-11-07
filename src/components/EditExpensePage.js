import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from './../actions/expenses';

export class EditExpensePage extends Component {
    onSubmit = (expense)=>{
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/');
    }
    onRemove = ()=>{
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
            );
    }
}

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);