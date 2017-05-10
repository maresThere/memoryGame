import React, { Component } from 'react'

class Modal extends Component {

  _reset = () => {
    console.log('well it knows I clicked')
    this.props.reset()
  }

 render() {
   return (
   <div className="overlay">
     <div className="dialog">
       <h3>You matched them all!</h3>
       <button onClick={this._reset}
          type="button">Play Again</button>
     </div>
    </div>
  )
  }
}


export default Modal
