import React, { Component } from 'react';
import styles from './Board.module.css';
import Display from '../../components/Display/Display';

class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <Display />
        <div>Keypad</div>
        <div>AddMoney</div>
      </div>
    );
  }
}

export default Board;