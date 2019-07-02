import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Table from './Components/table'
import Home from './Components/home'


const URL = 'http://localhost:3005/api/check'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:'',file:null,list:[]}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleFinished = this.handleFinished.bind(this)
    this.handleMarkUnfinished = this.handleMarkUnfinished.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    //this.Refresh = this.Refresh.bind(this)

    this.Refresh()
  }


  Refresh(){
    axios.get(URL).then(response =>{  
    let list =[]
    for(let i=0;i<response.data.length;i++){
      if(response.data[i].image != null){
        var teste =  btoa(String.fromCharCode.apply(null, new Uint8Array(response.data[i].image.data.data)))
        //console.log(response.data[i].finished)
        list.push({name:response.data[i].name,image:teste,finished:response.data[i].finished})
      }
      else{
        list.push({name:response.data[i].name,image:null,finished:response.data[i].finished})
      }
    }
    this.setState({...this.state,list:list})
    //console.log(list[0].image)
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
    axios.post(URL,fd).then(response => this.Refresh())
    this.Refresh()
    }
    else{
      alert('Please Select a image')
    }
    
  }

  handleChange(event){
    this.setState({...this.state,name:event.target.value})
    if(event.target.value ===''){
      this.Refresh()
    }
  }

  handleRemove(item){
    axios.delete(URL,{data:{name:item.name}}).then(response=> this.Refresh())
  }

  handleFinished(item){
    axios.put(URL,{name:item.name,update:true}).then(response=> this.Refresh() )
  }

  handleMarkUnfinished(item){
    axios.put(URL,{name:item.name,update:false}).then(response=>this.Refresh())
  }

 handleFilter(event){
   let list = this.state.list
   let filtred_list = list.filter((item)=>{return item.name.indexOf(this.state.name) !== -1 })
   this.setState({...this.state,list:filtred_list})
 }

  handleUpload(event){
    let img = event.target.files[0]
    //console.log(img)
    this.setState({file:img})
     //set value of event to null(like a reset of input that select local image)
    event.target.value = null
    
  }

  render() { 
    return (
      <div>
        <Home handleClick = {this.handleClick} handleChange = {this.handleChange} name = {this.state.name} upload ={this.handleUpload} handleFilter={this.handleFilter} />
        <Table search = {this.state.name} list ={this.state.list} handleRemove = {this.handleRemove} handleFinished = {this.handleFinished} handleMarkUnfinished = {this.handleMarkUnfinished} />
      </div>    
    );
  }
}

export default App;
