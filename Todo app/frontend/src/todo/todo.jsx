import React from 'react'
import axios from 'axios'
import Pageheader from '../template/pageHeader.jsx'
import Todolist from './todoList.jsx'
import TodoForm from './todoForm.jsx'

const URL = 'http://localhost:3003/api/todo'

export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {description:'',list:[]}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }
    
    
    
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp=>this.setState({...this.state,description,list:resp.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true}).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false}).then(resp => this.refresh(this.state.description))
    }
    
    
    handleChange(event){
        this.setState({...this.state, description: event.target.value})

    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(res=>this.refresh())
        
    }

    render(){
        return(
            <div>
               <Pageheader name = 'Todo' small = 'Task' />
               <TodoForm handleAdd = {this.handleAdd} description ={this.state.description} handleChange ={this.handleChange} handleSearch = {this.handleSearch} />
               <Todolist list = {this.state.list} handleRemove = {this.handleRemove} handleMarkAsDone = {this.handleMarkAsDone} handleMarkAsPending ={this.handleMarkAsPending} />
            </div>
            
        )
    }
}