import React, { Component } from 'react';
import Counter from "./components/Counter";
import CounterDec from "./components/CounterDec";
import { Link, Route } from "react-router-dom";
import GamesPage from "./components/GamesPage";

class App extends Component {
  render() {
    return (
      <div>
        
        <Link to='/counter'>Перейти до лічильника</Link>
        <br />
        <Link to='/counterdec'>Перейти до лічильника зменшення</Link>
        <br />
        <br />
        <Link to='/games'>Ігри</Link>
        {/* <Counter /> */}

        <Route exact path='/counter' component={Counter} /> 
        <Route path='/counterdec' component={CounterDec} />
        <Route path='/games' component={GamesPage} />

      </div>
    );
  }
}

export default App;
