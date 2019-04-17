import React from 'react'
import Fileinput from './fileInput'
export default props =>{
  
  const list = props.list || []
  const row = ()=>{
    return(
      list.map((item,index) =>{
        return(
            <tr key={index}>
              <td> <img src={item[1]} height='250' width='200'/></td>
              <td> {item[0]} </td>
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
                <th scope="col">Cover</th>
                <th scope="col">Tittle</th>
              </tr>
              </thead>
              <tbody>
                {row()}
              </tbody>
            </table>
        </div>
    )
}