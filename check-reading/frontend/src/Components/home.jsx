import React from 'react'
import Grid from './grid'
import Navbar from './navbar'
import Button from './buttons'
import Fileinput from './fileInput'

export default props =>(
    <div>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid columns = 'offset-3'>
          <input className='col-xl-7 '  placeholder ="Add a title that you gonna reading"  value = {props.name} onChange = {props.handleChange}></input>
          <Button btn= 'btn btn-primary btn-sm'  icon ='plus' handleClick = {props.handleClick}></Button>
          <Fileinput btn='btn btn-primary btn-sm  label-size' icon='image' for='file' upload ={props.upload}></Fileinput>
          <Button btn='btn btn-danger btn-sm ' icon = 'search' handleClick={props.handleFilter} ></Button>
        </Grid>
    </div>
)