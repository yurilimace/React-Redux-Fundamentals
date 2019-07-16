import React from 'react'
import Button from './buttons'
export default props =>{
  
  
  
  const list = props.list || []
  
  const row = ()=>{
    let Flag = 'data:image/jpeg;base64'
    return(
      list.map((item,index) =>{
        return(
            <tr key={index}>
                <td  className='cellsize align-middle' align='center'> <span> <img  src={`${Flag},${item.image}`} alt={"tittle cover"} height='250' width='200' /> </span> </td>
                <td className='cellsize align-middle'align='center'> {item.name} </td>
                {!item.finished && (<td className='cellsize align-middle' align='center'>
                  <Button btn= 'btn btn-success btn-sm'  icon ='check'  handleClick = {()=>props.handleFinished(item)}  ></Button>
                  <br/>

                </td>)}
                
                {item.finished && (<td className='cellsize align-middle' align='center'>
                  
                  <Button btn= 'btn btn-danger btn-sm'  icon ='trash'  handleClick = {()=>props.handleRemove(item)}  ></Button>
                  <Button btn= 'btn btn-info btn-sm'  icon ='thumbs-up' handleClick = {props.handleClick} ></Button>
                  <Button btn= 'btn btn-warning btn-sm'  icon ='undo'  handleClick = {()=>props.handleMarkUnfinished(item)} ></Button>

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