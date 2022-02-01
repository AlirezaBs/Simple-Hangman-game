import React, { Component } from 'react';
import './Hangman.css';
const img0 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/0.jpg';
const img1 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/1.jpg';
const img2 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/2.jpg';
const img3 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/3.jpg';
const img4 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/4.jpg';
const img5 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/5.jpg';
const img6 =
  'https://raw.githubusercontent.com/podenborg/modern-react-hangman/master/src/6.jpg';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };
  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: 'apple',
    };
  }

  //Show current state of words
  guessedWord() {
    return this.state.answer
      .split('')
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'));
  }

  //Guess handler
  handleGuess = (e) => {
    const ltr = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  };
  //Generate BTNs
  generateBtn() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
      <button
        key={ltr}
        className="btns"
        onClick={this.handleGuess}
        value={ltr}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} />
        <p className="guessedWords">{this.guessedWord()}</p>
        <p className="nWrong">
          Wrong: <b>{this.state.nWrong}</b>
        </p>
        <div className="btnContainer">{this.generateBtn()}</div>
      </div>
    );
  }
}

export default Hangman;
