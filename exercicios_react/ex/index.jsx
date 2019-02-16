import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    //React don't render ungroup components
    <Family>
        <Member name = "John" lastname = "acer"/>
        <Member name = "Mary" lastname = "acer"/>
    </Family>,
    document.getElementById('app')
)