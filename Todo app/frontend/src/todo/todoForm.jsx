import React from 'react'
import Grid from '../template/grid.jsx'
import Iconbutton from '../template/iconbutton.jsx'


export default props =>(
    <div role ='form' className = 'todoForm'>
        <Grid cols = '12 9 8 ' >
            <input id = 'descpription' className = 'form-control' placeholder = 'Add a task' value ={props.description} onChange = {props.handleChange}></input>
        </Grid>


        <Grid cols = '12 3 2'>
            <Iconbutton style = 'primary' icon ='plus' onClick = {props.handleAdd}></Iconbutton>
            <Iconbutton style = 'info' icon = 'search' onClick ={props.handleSearch} ></Iconbutton>

        </Grid>

    </div>
)