import React from 'react'

class Grid extends React.Component{
    
    render(){
        return(
            <div className ={this.props.columns}>
                {this.props.children}
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Grid