import React from 'react'
import Grid from './grid'
import Navbar from './navbar'
import Button from './buttons'

export default props =>(
    <div>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid columns = 'offset-3'>
          <input className='col-xl-7'  placeholder ="Add a title that you gonna reading"></input>
          <Button btn= 'btn btn-primary btn-sm'  icon ='plus' handleClick = {props.handleClick}></Button>
          <Button btn='btn btn-danger btn-sm' icon = 'search'></Button>
        </Grid>
    </div>
)