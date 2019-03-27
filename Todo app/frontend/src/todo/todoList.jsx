import React from 'react'
import Grid from '../template/grid.jsx'
import Iconbutton from '../template/iconbutton.jsx'

export default props =>{
   
  const list = props.list || []
   const renderRows = () =>{
        return(
            list.map(todo => (
                <tr key ={todo._id}>
                    <td className ={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td> 
                        <Iconbutton style = 'success' icon = 'check' onClick = {()=>props.handleMarkAsDone(todo)}></Iconbutton> 
                        <Iconbutton style = 'danger' icon = 'trash-o' onClick ={()=>props.handleRemove(todo)} ></Iconbutton>
                        <Iconbutton style = 'warning' icon = 'undo' onClick ={()=>props.handleMarkAsPending(todo)} ></Iconbutton>
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