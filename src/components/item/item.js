import React, { Component } from 'react'

class Item extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <img src={this.props.thumbnail}/>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Item
