import React from 'react'
import './index.css'

export default class Grid extends React.Component{
    render(){
        return(
            <div className = 'container-fluid'>
                <div className = " col-xs-6 col-sm-6 col-md-12 col-lg-6 offset-3 ">
                    {this.props.children}
                </div>
            </div>
            
        )
    }
}
