import React from 'react'
import Grid from '../template/grid.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Iconbutton from '../template/iconbutton.jsx'
import {MarkAsDone,MarkAsPending,Remove} from './todoActions'


 const TodoList = props =>{
   
   const list = props.list || []
   const renderRows = () =>{
        
        return(
            list.map(todo => (
                <tr key ={todo._id}>
                    <td className ={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td> 
                        <Iconbutton style = 'success' icon = 'check' onClick = {()=>props.MarkAsDone(todo)} hide={todo.done}></Iconbutton> 
                        <Iconbutton style = 'danger' icon = 'trash-o' onClick ={()=>props.Remove(todo)} hide={!todo.done} ></Iconbutton>
                        <Iconbutton style = 'warning' icon = 'undo' onClick ={()=>props.MarkAsPending(todo)} hide={!todo.done} ></Iconbutton>
                    </td>
                </tr>
            ))
        )
   }
    
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th> Descprition </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}

const mapStatetoProps = state =>({list:state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({MarkAsDone,MarkAsPending,Remove},dispatch)
export default connect(mapStatetoProps,mapDispatchToProps)(TodoList)