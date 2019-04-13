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
    this.setState({list:[...this.state.list,this.state.name]})
  }

  handleChange(event){
    this.setState({...this.state,name:event.target.value})
  }

  handleUpload(event){
     this.setState({file:URL.createObjectURL(event.target.files[0])})
  }

  render() {
    return (
      <div>
        <Home handleClick = {this.handleClick} handleChange = {this.handleChange} name = {this.state.name} upload={this.handleUpload}/>
        <Table list ={this.state.list} img={this.state.file}/>
      </div>    
    );
  }
}

export default App;
