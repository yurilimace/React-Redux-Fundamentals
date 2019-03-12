import React from 'react'
import Grid from '../template/grid.jsx'
import Iconbutton from '../template/iconbutton.jsx'


export default props =>(
    <div role ='form' className = 'todoForm'>
        <Grid cols = '12 9 8' >
            <input id = 'descpription' className = 'form-control' placeholder = 'Add a task'></input>
        </Grid>


        <Grid cols = '13 3 2'>
            <Iconbutton style = 'primary' icon ='plus' onClick = {props.handleAdd}></Iconbutton>
        </Grid>

    </div>
)