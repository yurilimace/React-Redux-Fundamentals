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

        this.refresh()
    }
    
    
    
    refresh(){
        axios.get(`${URL}?sort=-createdAt`).then(resp=>this.setState({...this.state,description:'',list:resp.data}))
    }

    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
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
               <TodoForm handleAdd = {this.handleAdd} description ={this.state.description} handleChange ={this.handleChange} />
               <Todolist list = {this.state.list} handleRemove = {this.handleRemove} />
            </div>
            
        )
    }
}