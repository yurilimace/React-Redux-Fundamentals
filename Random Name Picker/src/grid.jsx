import React from 'react'
import './index.css'

export default class Grid extends React.Component{
    render(){
        return(
            <div className = "col-sm-12 col-md-9 col-xl-8 offset-2">
                {this.props.children}
            </div>
        )
    }
}
