import React, { Component } from 'react';
import AddItem from './components/addItemForm';
import Checkbox from './components/checkbox'
import Delete from './components/delete'
import Edit from './components/edit'
import { getData } from './utils'


export default class extends Component {
    state = {
        itemLists: []
    }
    getLists = () => {
        this.setState({ loading: true })
    
      getData('http://localhost:8080/api/items/' + this.props.match.params.id)
      .then(res => {
        console.log("API RESPONSE", res.data)
        this.setState({ itemLists: res.data, loading: false })
      })
      }
      componentDidMount() {
        this.getLists()
      }
      
    render () {
        console.log("PARAMS", this.props.match.params.id);
        const { itemLists } = this.state
        
        return (
            <div>
                <div className="container">
                        <AddItem 
                            list_id={this.props.match.params.id}
                        />
                    <div
                        className="card-container">
                            {
                                itemLists.length > 0 ?
                                itemLists.map((item, index) => (
                                <div
                                    item_id={item._id}
                                    className='card'
                                    key={index}>
                                    <label> 
                                        Name: 
                                        <h3>
                                            {item.name}
                                        </h3>
                                    </label>
                                    <label> 
                                        Price: 
                                        <h3>
                                            {item.price}
                                        </h3>
                                    </label>
                                    <label> 
                                        Quantity: 
                                        <h3>
                                            {item.quantity}
                                        </h3>
                                    </label>
                                    <label> 
                                        Unit: 
                                        <h3>
                                            {item.metric_unit}
                                        </h3>
                                    </label>
                                        <div
                                            className="update">
                                                <Checkbox/>
                                                <Delete
                                                    item_id={item._id}  
                                                />
                                                <Edit/>
                                        </div>
                                </div>   
                                )) :
                                <p>No item list yet</p>
                            }
                    </div>       
                </div>
            </div>
        )
    }
}