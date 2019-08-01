import React,{Component} from 'react'
import Button from './buttons'

import {refresh,finish,unfinish,remove} from '../Actions/bookActions'
import {bindActionCreators} from 'redux'



import {connect} from 'react-redux'


 const table =  props =>{
  
  
  
  let list = props.list || []

  console.log(props.search)

  if(props.search === true){
   list = list.filter((item)=>{return item.name.indexOf(props.name) !== -1 })
  }
  
  const row = ()=>{
    let Flag = 'data:image/jpeg;base64'
    // `${Flag},${item.image}`//
    return(
      list.map((item,index) =>{
        return(
            <tr key={index}>
                <td  className='cellsize align-middle' align='center'> <span> <img  src={ `${Flag},${item.image}`} alt={"tittle cover"} height='250' width='200' /> </span> </td>
                <td className='cellsize align-middle'align='center'> {item.name} </td>
                {!item.finished && (<td className='cellsize align-middle' align='center'>
                  <Button btn= 'btn btn-success btn-sm'  icon ='check'  handleClick = {()=>props.finish(item)}  ></Button>
                  <br/>

                </td>)}
                
                {item.finished && (<td className='cellsize align-middle' align='center'>
                  
                  <Button btn= 'btn btn-danger btn-sm'  icon ='trash'  handleClick = {()=>props.remove(item)}  ></Button>
                  <Button btn= 'btn btn-info btn-sm'  icon ='thumbs-up'  ></Button>
                  <Button btn= 'btn btn-warning btn-sm'  icon ='undo'  handleClick = {()=>props.unfinish(item)} ></Button>

                </td>)}
            </tr>
        )
       }
      )
    )
  }
  
  
  return(
        <div className = "col-xl-6 offset-3">
            <table className='table table-sm'>
              <thead align='center'>
              <tr>
                <th scope="col">Cover</th>
                <th scope="col">Tittle</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
                {row()}
              </tbody>
            </table>
        </div>
    )
} 

const mapStatetotProps = state =>({list:state.book.list,search:state.book.search,name:state.book.name})

const mapDispatchtoProps = dispatch => (
  bindActionCreators({finish,unfinish,remove},dispatch)
)

export default connect(mapStatetotProps,mapDispatchtoProps)(table)

