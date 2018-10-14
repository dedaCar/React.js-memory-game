import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame, flipCard } from './actions';

import Game from './components/Game/Game';
import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGame()),
  flipCard: (id) => dispatch(flipCard(id)),
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game data={this.props.data} flipCard={this.props.flipCard} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
