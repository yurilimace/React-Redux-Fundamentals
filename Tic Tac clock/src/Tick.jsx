import React from 'react'


export default function tick(props){
    const element = (
        <div>
            <h1>Tic tac clock</h1>
            <h2> It is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
   return element

}

