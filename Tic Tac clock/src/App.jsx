import React from 'react';

//Componentes são funções, usando arrow functions do ES6
/*
export default(props) =>(
  <h1>Hello World</h1>
)
*/



function First(){
  return <h1> First Component </h1>
}

function Second(){
  return <h2>Second Component</h2>
}

function Composing(){
  return( <div>
    <First />
    <Second />
  </div>
  )

}

export {Composing}