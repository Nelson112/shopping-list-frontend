import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import List from './views/list'
import ItemList from './itemList'

export default class extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path='/' component={List}/>
            <Route exact path='/:id' component={ItemList}/>
          </div>
      </Router>
    )
  }
}
