import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default props=>(
    <button  className ={props.btn} onClick = {props.handleClick}>
        <i>  <FontAwesomeIcon icon ={props.icon}/>  </i>
    </button>
    
)
