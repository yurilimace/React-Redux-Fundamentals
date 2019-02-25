import React from 'react'
import Member from './member'
import {childrenWithProps} from '../utils/reactUtils'
export default props => (
    <div>
        <h1> Family </h1>
        {childrenWithProps(props.children,props)}
        
    </div>
)
