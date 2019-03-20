import React from 'react'
import './index.css'

export default class Grid extends React.Component{
    render(){
        return(
            <div className = "Grid">
                {this.props.children}
            </div>
        )
    }
}
