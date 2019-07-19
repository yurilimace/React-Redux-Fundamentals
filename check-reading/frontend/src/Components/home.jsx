import React,{Component} from 'react'
import{connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeName,addBook} from '../Actions/bookActions'

import Grid from './grid'
import Navbar from './navbar'
import Button from './buttons'
import Fileinput from './fileInput'



class home extends Component{

  render(){
    return(
      <div>
        <Grid>
          <Navbar/>
        </Grid>
        <Grid columns = 'offset-3'>
          <input className='col-xl-7 '  placeholder ="Add a title that you gonna reading"  value = {this.props.name} onChange = {this.props.changeName}></input>
          <Button btn= 'btn btn-primary btn-sm'  icon ='plus' handleClick = {()=>this.props.addBook(this.props.name)}></Button>
          <Fileinput btn='btn btn-primary btn-sm  label-size' icon='image' for='file' upload ={this.props.upload}></Fileinput>
          <Button btn='btn btn-danger btn-sm ' icon = 'search' handleClick={this.props.handleFilter} ></Button>
        </Grid>
     </div>
    )
    
  }
}


const MapStatetoProps = state =>({name:state.book.name})

const MapDispatchtoProps = dispatch => (
  bindActionCreators({changeName,addBook},dispatch)
)
export default connect(MapStatetoProps,MapDispatchtoProps)(home)