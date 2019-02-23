import React from 'react'
/*Composing React Components*/

function Welcome(props){
    return <h1>hello World,{props.name} </h1>
}

export default function App(){
    return(
        <div>
            <Welcome name="Nathy"/>
            <Welcome name="Charles"/>
            <Welcome name="Joe"/>            
        </div>
    )
}