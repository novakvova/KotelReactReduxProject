import React, { Component } from 'react';
import Counter from "./components/Counter";
import CounterDec from "./components/CounterDec";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        
        <Link to='/counter'>Перейти до лічильника</Link>
        <br />
        <Link to='/counterdec'>Перейти до лічильника зменшення</Link>
        {/* <Counter /> */}

        <Route exact path='/counter' component={Counter} /> 
        <Route path='/counterdec' component={CounterDec} />

      </div>
    );
  }
}

export default App;
