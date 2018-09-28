import React, { Component } from 'react'
import './item.css'

class Item extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Item"> 
                <img src={this.props.thumbnail}/>
                <h4>{this.props.title}</h4>
                <h5>Price: ${this.props.price}</h5>
            </div>
        )
    }
}

export default Item
