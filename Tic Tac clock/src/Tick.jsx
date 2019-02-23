import React from 'react'


export default function tick(){
    const element = (
        <div>
            <h1>Tic tac clock</h1>
            <h2> It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
   return element

}

