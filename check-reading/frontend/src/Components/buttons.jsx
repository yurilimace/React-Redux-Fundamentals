import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default props=>(
    <button  className ={props.btn} onClick = {props.handleClick} type={props.type}>
        <i>  <FontAwesomeIcon icon ={props.icon}/>  </i>
    </button>
    
)