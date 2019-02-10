import React, { Component } from 'react';
import Counter from "./components/Counter";
import CounterDec from "./components/CounterDec";
import { Link, Route } from "react-router-dom";
import GamesPage from "./components/GamesPage";
import GameForm from './components/GameForm';

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
        <Route exact path='/counterdec' component={CounterDec} />
        <Route exact path='/games/add' component={GameForm} />
        <Route exact path='/games' component={GamesPage} />

      </div>
    );
  }
}

export default App;
