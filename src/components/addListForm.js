import React, { Component } from 'react';
import { postData } from '../utils'

export default class extends Component {
    constructor(props) {
      super(props);
      this.state = {
            name: '',
            loading: false
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.id]: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('this is the new list name ' + this.state.name);
      event.preventDefault();

      const dataToSubmit = {
          name: this.state.name
      }

        // set loading state to true
        this.setState({loading: true})
        // post data
        postData('http://localhost:8080/api/lists', dataToSubmit)
        .then(res => {
            this.setState({loading: false})
        })
        .catch(err => {
            console.log("ERROR ", err);
            
        })

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input id="name" placeholder="Add new shopping list" type="text" value={this.state.name} onChange={this.handleChange} style={{
            marginBottom: "5px"
            }}/>
          </label>
          <input type="submit" value="Add List" style={{
            marginBottom: "5px"
            }}/>
        </form>
      );
    }
  }