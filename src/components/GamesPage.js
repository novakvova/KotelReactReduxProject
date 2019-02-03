import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

class GamesPage extends Component {
    state = {  }
    componentDidMount() {
        this.props.fetchGames();
    }
    render() { 
        console.log('--this.props games---', this.props);
        return ( 
            <h1>Games page</h1>
         );
    }
}
const mapStateToProps=(state) => {
    return {
        games: state.games
    }
}
 
export default connect(mapStateToProps, { fetchGames })(GamesPage);