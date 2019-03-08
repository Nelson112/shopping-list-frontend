import React, { Component } from 'react'
import { getData } from '../utils'

export default class  extends Component {

  state = {
    item: []
  }
  getItems = () => {
    this.setState({ loading: true })
    console.log(this.props)
    getData('http://localhost:8080/api/item/' + this.props.item_id)
    .then(res => {
      console.log("API RESPONSE", res.data)
      this.setState({ items: res.data, loading: false })
    })
  }
componentDidMount() {
  this.getItems()
}

  
  render() {
    return (
      <div>
        <button
          onClick={ this.getItems }
          className="delete" 
          type="detete" 
          value="Delete">
          Delete
        </button>
      </div>
    )
  }
}
