import React, { Component } from 'react';
import { postData } from '../utils'

export default class extends Component {
    constructor(props) {
      super(props);
      this.state = {
            name: '',
            price: '',
            quantity: '',
            metric_unit: '',
            list_id: '',
            checked: false,
            loading: false
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.id]: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      const dataToSubmit = {
          list_id: this.props.list_id,
          name: this.state.name,
          price: this.state.price,
          quantity: this.state.quantity,
          metric_unit: this.state.metric_unit,
          checked: this.state.checked
      }

        console.log (dataToSubmit)
        // set loading state to true
        this.setState({loading: true})
        // post data
        postData('http://localhost:8080/api/items', dataToSubmit)
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
                Name:
                <input 
                    id="name" 
                    placeholder="enter item name" 
                    type="text" value={this.state.name} 
                    onChange={this.handleChange} 
                    style={{
                    marginBottom: "5px"
                    }}
                />
          </label>
          <label>
                Price:
                <input 
                    id="price" 
                    placeholder="R27, $5 etc" 
                    type="text" value={this.state.price} 
                    onChange={this.handleChange} 
                    style={{
                    marginBottom: "5px"
                    }}
                />
          </label>
          <label>
                quantity:
                <input 
                    id="quantity" 
                    placeholder="1, 2 etc" 
                    type="number" value={this.state.quantity} 
                    onChange={this.handleChange} 
                    style={{
                    marginBottom: "5px"
                    }}
                />
          </label>
          <label>
            Unit:
                <input 
                    id="metric_unit" 
                    placeholder="(OPTIONAL) 1kg, 1l etc" 
                    type="text" value={this.state.metric_unit} 
                    onChange={this.handleChange} 
                    style={{
                    marginBottom: "5px"
                    }}
                />
          </label>
          <input 
                type="submit" 
                value="Add Item" 
                style={{
                marginBottom: "5px"
                }}
            />
        </form>
      );
    }
  }