import React, { Component } from 'react'
import { connect } from 'react-redux'


class Field extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.value}</label>
                </div>
                <input
                    onChange={(e) => this.handleChange(e)}
                    value={this.props.value}
                ></input>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

export default connect(mapStateToProps)(Field)
