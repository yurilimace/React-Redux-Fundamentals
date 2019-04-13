import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default props =>{
    return(
            
            <label for ={props.for} className={props.btn} id='upload'>
                <i> <FontAwesomeIcon icon={props.icon}/> </i> 
            </label>
    )
}