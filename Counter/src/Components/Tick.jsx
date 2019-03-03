import React from 'react'

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    /*lifecycle methods, when the component is render in DOM this method(Mount) and run the
    code inside it*/
    
    componentDidMount(){
        setInterval(
            ()=> this.tick(),1000
        )
    }
    
    /*opsite the mount method, unmount run the code after the component been remove from the DOM*/
    componentWillUnmount(){
        clearInterval(this.TimerId)
    }

    //method that updates the state of the component every 1 second
    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div>
                <h1>Hello, World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button> press button</button>
            </div>
        );    
    }
}

