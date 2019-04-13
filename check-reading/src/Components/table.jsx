import React from 'react'
import App from '../App';
import Fileinput from './fileInput'
export default props =>{
  
  const list = props.list || []
  const src = props.img
  const row = ()=>{
    return(
      list.map((item,index) =>{
        return(
            <tr key={index}>
              <td> {item} </td>
              <td> <img src={src} height='250' width='200'/></td>
              <td>
                <Fileinput btn='btn btn-primary btn-sm' icon='image' for='file'></Fileinput>
              </td>
            </tr>
        )
       }
      )
    )
  }
  
  
  return(
        <div className = "col-xl-6 offset-3">
            <table className='table'>
              <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
              </tr>
              </thead>
              <tbody>
                {row()}
              </tbody>
            </table>
        </div>
    )
}