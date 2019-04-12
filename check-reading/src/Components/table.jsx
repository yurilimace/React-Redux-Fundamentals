import React from 'react'
import App from '../App';

export default props =>{
  
  const list = props.list || []
  const row = ()=>{
    return(
      list.map((item,index) =>{
        return(
            <tr key={index}>
              <td> {item} </td>
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