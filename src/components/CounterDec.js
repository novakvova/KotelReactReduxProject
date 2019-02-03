import React, { Component } from 'react';
import { connect } from "react-redux";
import { DEC_COUNTER } from '../actions';
//imrc
//cc

class CounterDec extends Component {
    state = {  }
    onClickDecrement = () => {
        this.props.decrementAction();
    }
    render() { 
        return ( 
        <div>
            <h1>Page counter decrement {this.props.count}</h1>
            <button onClick={this.onClickDecrement}>Зменшити значення на 1</button>
        </div> 
        );
    }
}

const mapStateProps= (state) => {
    console.log('------state by store-----', state);
    return {
        count: state.semen.countStore
    };
}

const mapDisaptch = (dispatch) => {
    return {
        decrementAction: () => {
            dispatch({type: DEC_COUNTER});
        }
    }
}
 
export default connect(mapStateProps, mapDisaptch)(CounterDec);