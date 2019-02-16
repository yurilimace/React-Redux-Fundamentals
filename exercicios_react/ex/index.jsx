import React from 'react'
import ReactDOM from 'react-dom'
import First,{Second} from './component'

ReactDOM.render(
    //React don't render ungroup components
    <div>
        <First />
        <Second />
    </div>,
    document.getElementById('app')
)