import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default props =>{
    return(   
            <label htmlFor ={props.for} className={props.btn} id='upload'>
                <i> <FontAwesomeIcon icon={props.icon}/> </i>
                <input type='file' id='file' onChange={props.upload} ></input> 
            </label>
    )
}