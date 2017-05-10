import React, { Component } from 'react';
import Modal from './Modal'
import Card from './Card'
import './index.css';

class App extends Component {
 state = {
   moves: ['camera2', 'camera', 'cassette', 'diskette', 'gameBoy', 'guitar', 'microphone', 'television', 'camera2', 'camera', 'cassette', 'diskette', 'gameBoy', 'guitar', 'microphone', 'television'],
   picks: [],
   matched: [],
   gameOver: false
 }

 flipCard = (flip) => {
   if (this.state.picks.length < 2 && !this.state.picks.includes(flip)) {
     this.setState({
       picks: [...this.state.picks, flip],
     }, () => {
       if (this.state.picks.length === 2) this.checkForMatch()
     })
   }
 }

  checkForMatch = (i) => {
    const picks = this.state.picks
    if (this.state.moves[picks[0]] === this.state.moves[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...this.state.picks]
      }, () => {
        if (this.state.matched.length === this.state.moves.length) {
          window.setTimeout(() => {
            this.setState({
              picks: [],
              matched: [],
              gameOver: true
            })
          }, 2000)
        }
      })
    }
    window.setTimeout(() => {
      this.setState({
        picks: []
      })
    }, 1500)
  }

  reset = () => {
    this.setState({ gameOver: false })
  }

  render() {
    if (this.state.gameOver) {
      return <Modal reset={this.reset} />
    } else {
      return (
        <div>
        <h1>Let's Play Memory</h1>
        <div className='cardContainer'>
          <Card index={1} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[1]} revealed={this.state.picks.includes(1)} matched={this.state.matched.includes(1)} />
          <Card index={2} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[2]} revealed={this.state.picks.includes(2)} matched={this.state.matched.includes(2)} />
          <Card index={3} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[3]} revealed={this.state.picks.includes(3)} matched={this.state.matched.includes(3)} />
          <Card index={4} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[4]} revealed={this.state.picks.includes(4)} matched={this.state.matched.includes(4)} />
          <Card index={0} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[0]} revealed={this.state.picks.includes(0)} matched={this.state.matched.includes(0)} />
          <Card index={8} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[8]} revealed={this.state.picks.includes(8)} matched={this.state.matched.includes(8)} />
        <Card index={5} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[5]} revealed={this.state.picks.includes(5)} matched={this.state.matched.includes(5)} />
          <Card index={6} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[6]} revealed={this.state.picks.includes(6)} matched={this.state.matched.includes(6)} />
          <Card index={7} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[7]} revealed={this.state.picks.includes(7)} matched={this.state.matched.includes(7)} />

          <Card index={9} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[9]} revealed={this.state.picks.includes(9)} matched={this.state.matched.includes(9)} />
          <Card index={10} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[10]} revealed={this.state.picks.includes(10)} matched={this.state.matched.includes(10)} />
          <Card index={11} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[11]} revealed={this.state.picks.includes(11)} matched={this.state.matched.includes(11)} />
          <Card index={12} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[12]} revealed={this.state.picks.includes(12)} matched={this.state.matched.includes(12)} />
          <Card index={13} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[13]} revealed={this.state.picks.includes(13)} matched={this.state.matched.includes(13)} />
          <Card index={14} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[14]} revealed={this.state.picks.includes(14)} matched={this.state.matched.includes(14)} />
          <Card index={15} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[15]} revealed={this.state.picks.includes(15)} matched={this.state.matched.includes(15)} />
        </div>
      </div>
      )
    }
  }
}

export default App;
