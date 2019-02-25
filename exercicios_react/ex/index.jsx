import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    //React don't render ungroup components
    <Family lastname='Acer'>
        <Member name = "John" />
        <Member name = "Ned"/>
        <Member name = "Sansa"/>
    </Family>,
    document.getElementById('app')
)