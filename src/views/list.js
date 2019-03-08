import React, { Component } from 'react';
import Form from '../components/addListForm'
import { getData } from '../utils'


export default class extends Component {
    state = {
      shoppingLists: []
  }
  getLists = () => {
    this.setState({ loading: true })

  getData('http://localhost:8080/api/lists')
  .then(res => {
    console.log("API RESPONSE", res.data)
    this.setState({ shoppingLists: res.data, loading: false })

  })
  }
  componentDidMount() {
    this.getLists()
  }
  
  render(){
      const { shoppingLists } = this.state

    return(      
      <div className='container'>
          
        <h1>
          Shopping lists
        </h1>
        <Form/>
        {
          shoppingLists.length > 0 ?
          shoppingLists.map((item, index) => (
            <li onClick={e => {
                    this.props.history.push('/' + item._id)
                }} key={index}>
                {item.name} 
                <span className="number-of-lists">
                12
                </span>
            </li>   
          )) :
          <p>No shopping list yet</p>      
        }
      </div>
    )
  }  
}
