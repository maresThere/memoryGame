import React, { Component } from 'react'

class Card extends Component {
  _click =() => {
  this.props.flipCard(this.props.index)
 }

 render() {
   const matched = this.props.matched ? 'matched' : ''
   const revealed = this.props.revealed ? 'revealed' : ''
   return (
   <div
     onClick={this._click}
     className={`${this.props.value} card ${revealed} ${matched}`}></div>
   )
 }

}

export default Card
