import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import GamesList from './GamesList';

class GamesPage extends Component {
    state = {  }
    componentDidMount() {
        this.props.fetchGames();
    }
    render() { 
        console.log('--this.props games---', this.props);
        return ( 
            <div>
                <h1>Games page</h1>
                <br />
                <Link to='/games/add'>Додати гру</Link>
                <GamesList games={this.props.games}/>
            </div>
         );
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps=(state) => {
    return {
        games: state.games
    }
}
 
export default connect(mapStateToProps, { fetchGames })(GamesPage);