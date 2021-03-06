import React, { Component } from 'react';
import Card from '../UI/Card/Card';
import styles from './Game.module.css';

class Game extends Component {
  createGameBoard = () => {
  	const board = [];

  	for (let i = 0; i < this.props.data.size; i += 1) {
		  const element = this.props.data.get(i);

  		board.push((<Card element={element} handleFlip={this.handleFlipCard} key={i} id={i} />));
  	}

  	return board;
  }

  handleFlipCard = (id) => {
	  const card = this.props.data.get(id);

  	if (card.active) {
  		return;
  	}

  	this.props.flipCard(id);
  }

  render() {
  	return (
	<div className={styles.board}>
	{this.createGameBoard()}
  		</div>
  	);
  }
}

export default Game;
