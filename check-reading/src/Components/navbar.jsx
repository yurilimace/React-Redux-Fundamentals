import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>(
    <nav  className = 'navbar navbar-expand-md navbar-dark bg-primary'>
        <a className = 'navbar-brand' href="/#home">
            <i> <FontAwesomeIcon icon = "book" color="white" /></i> Check-Reading
        </a>
        
        <div className ='collapse navbar-collapse '>
            <ul className ='navbar-nav mr-auto'>
                <li className='nav-item '> <a className='nav-link' href='/#home'> Home </a> </li>
                <li className='nav-item '> <a className='nav-link' href='/#about'> About </a> </li>
            </ul>
        </div>
       
    
        
    </nav>

)