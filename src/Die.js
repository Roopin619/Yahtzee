import React, { Component } from "react";
import "./Die.css";

const diceArray = ['one', 'two', 'three', 'four', 'five', 'six'];

class Die extends Component {
  handleToggle = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let classes = `Die fas fa-dice-${diceArray[this.props.val - 1]} fa-4x `;
    if (this.props.locked) classes += 'Die-locked';
    if (this.props.rolling) classes += 'Die-rolling';

    return (
      <i className={classes} onClick={this.handleToggle} disabled={this.props.disabled} />
    );
  }
}

export default Die;
