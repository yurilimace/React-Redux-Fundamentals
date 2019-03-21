import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

library.add(faBomb)

export default props =>(
    <nav className = 'navbar fixed-top navbar-dark bg-primary'> 
        <div className ='navbar-header bg-primary'>
            <i> <FontAwesomeIcon icon="bomb" size='2x' spin color = 'white' /> </i>
            <h2 className = 'navbar-brand' >Papoca Choice </h2>
        </div>
    </nav>
)