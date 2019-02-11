import React, { Component } from 'react';
import styles from './Board.module.css';

class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <div>Display</div>
        <div>Keypad</div>
        <div>AddMoney</div>
      </div>
    );
  }
}

export default Board;