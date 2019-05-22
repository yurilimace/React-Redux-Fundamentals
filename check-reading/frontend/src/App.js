import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Table from './Components/table'
import Home from './Components/home'
import { Result } from 'range-parser';

const URL = 'http://localhost:3005/api/check'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:'',file:null,list:[]}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this)

    this.Refresh()
  }

  
  Refresh(){
    axios.get(URL).then(response =>{  
    this.setState({...this.state,list:response.data})
    console.log(this.state.list[0].image.data.data)
    
    })
  }


  handleClick(){
    //changing state value list using spread operator
    this.setState({list:[...this.state.list,[this.state.name,this.state.file]],file:null})
    let fd = new FormData()
    fd.append('name',this.state.name)
    fd.append('image',this.state.file)
    //const config ={headers:{'Content-Type':'multipart/form-data'}}
    //axios.post(URL,fd).then(console.log('Book added'))
  }

  handleChange(event){
    this.setState({...this.state,name:event.target.value})
  }

  handleUpload(event){
    let img = event.target.files[0]
    console.log(img)
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
