import React, { Component } from 'react'
import './App.css'
import Table from './Components/table'
import Home from './Components/home'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:'',file:null,list:[]}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  

  handleClick(){
    //changing state value list using spread operator
    this.setState({list:[...this.state.list,[this.state.name,this.state.file]],file:null})
  }

  handleChange(event){
    this.setState({...this.state,name:event.target.value})
  }

  handleUpload(event){
    let img = URL.createObjectURL(event.target.files[0])
    this.setState({file:img})
     //set value of event to null(like a reset of input that select local image)
    event.target.value = null
    
  }

  render() {
    return (
      <div>
        <Home handleClick = {this.handleClick} handleChange = {this.handleChange} name = {this.state.name} upload ={this.handleUpload} />
        <Table list ={this.state.list}/>
      </div>    
    );
  }
}

export default App;
