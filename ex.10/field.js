import React, { Component } from 'react'

export default class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.initialValue
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <label>{this.state.value}</label>
                </div>
                <input
                    onChange={(e)=>this.handleChange(e)}
                    value={this.state.value}
                ></input>
            </div>
        )
    }
}

