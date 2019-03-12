import React from 'react'
import Pageheader from '../template/pageHeader.jsx'
import Todolist from './todoList.jsx'
import TodoForm from './todoForm.jsx'
export default class Todo extends React.Component{
    handleAdd(){
        console.log("Add")
    }

    render(){
        return(
            <div>
               <Pageheader name = 'Todo' small = 'Task' />
               <Todolist />
                <TodoForm handleAdd = {this.handleAdd} />
            </div>
            
        )
    }
}