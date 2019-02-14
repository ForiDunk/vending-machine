import React, { Component } from 'react';
import styles from './Board.module.css';
import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import AddMoney from '../../components/AddMoney/AddMoney';

class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <Display />
        <Keypad />
        <AddMoney />
      </div>
    );
  }
}

export default Board;