import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc, dec, setpChanged} from './counterActions'

const Counter = props=>(
    <div>
        <h1>{props.counter.number}</h1>
        <input
            onChange={props.setpChanged}
            value={props.counter.step}
            type='number'
        ></input>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state=>({counter: state.counter})
const mapDispatchToProps = 
    dispatch => bindActionCreators(
            {
                inc, 
                dec, 
                setpChanged
            },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter) // padrão decorator
