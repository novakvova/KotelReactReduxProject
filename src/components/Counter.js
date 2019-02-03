import React, { Component } from 'react';
import { connect } from "react-redux";
import { INC_COUNTER } from '../actions';

//imrc
//cc

class Counter extends Component {
    state = {  }
    
    onClickINC = () => {
        console.log('--Click increment--');
        this.props.dispatch({type: INC_COUNTER});
    }
    render() { 
        console.log('----Conter props----', this.props);
        const {count} = this.props;
        return ( 
        <div>
            <h1>Page counter {count}</h1>
            <button onClick={this.onClickINC}>Збільшити змінну</button>
        </div> 
        );
    }
}

function mapStateProps(state) {
    console.log('------state by store-----', state);
    return {
        count: state.semen.countStore
    };
}
 
export default connect(mapStateProps)(Counter);