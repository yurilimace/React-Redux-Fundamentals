import React from 'react'
import ReactDOM from 'react-dom'
import Famiy from './family'

ReactDOM.render(
    //React don't render ungroup components
    <div>
        <Famiy />
    </div>,
    document.getElementById('app')
)