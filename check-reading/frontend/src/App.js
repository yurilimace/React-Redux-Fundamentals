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
    let list =[]
    for(let i=0;i<response.data.length;i++){
      if(response.data[i].image != null){
        var teste =  btoa(String.fromCharCode.apply(null, new Uint8Array(response.data[i].image.data.data)))
        //console.log(teste)
        list.push({name:response.data[i].name,image:teste})
      }
      else{
        list.push({name:response.data[i].name,image:null})
      }
    }
    this.setState({...this.state,list:list})
    console.log(list[0].image)
    })
  }


  handleClick(){
    //changing state value list using spread operator
    if(this.state.file !==null){
      this.setState({list:[...this.state.list,[this.state.name,this.state.file]],file:null})
      let fd = new FormData()
      fd.append('name',this.state.name)
      fd.append('image',this.state.file)
    //const config ={headers:{'Content-Type':'multipart/form-data'}}
    //axios.post(URL,fd).then(console.log('Book added'))
    }
    else{
      alert('Insira uma imagem')
    }
    
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
