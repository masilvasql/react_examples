import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName="Abrão da Silva">
            <Member name = "Marcelo" ></Member>
            <Member name = "Matheus" ></Member>
            <Member name = "Maurita" ></Member>
        </Family>
        
    </div>,
    document.getElementById("app")
)