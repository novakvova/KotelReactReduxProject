import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GamesList extends Component {
    state = {  }
    render() { 
        const { games } = this.props;
        console.log('--GAmes list-', games);
        const emptyMessage = (
            <p>Список пустий</p>
        );
        const gamesList = (
            <div className="row">
                <p>Ігри</p>
            </div>
        )
        return ( 
        <h2>
            {games.length===0 ? emptyMessage : gamesList}
        </h2> 
        );
    }
}

GamesList.propTypes ={
    games: PropTypes.array.isRequired
}
 
export default GamesList;