import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
        <label className="checkbox-container"> Got it
            <input 
                type="checkbox"
             />
            <span 
                className="checkmark">
            </span>
        </label>
      </div>
    )
  }
}
