import axios from 'axios'

const URL = 'http://localhost:3005/api/check'


export const refresh = () =>{
    const request = axios.get(URL)
    return{
        type:'REFRESH',
        payload:request
    }
}


export const changeName = (event) =>({
    type:'NAME_CHANGED',
    payload:event.target.value
})

export const upload = (event) =>({
    type:'UPLOAD_DONE',
    //while dont push image from database, must have to user URL.createObjectURL to display a image
    payload:event.target.files[0]
})


export const filterList = () =>({
    type:"SEARCH"
})


/*
export const addBook = (name,file) =>{
    console.log(file)
    return{
        type:"BOOK_ADD",
        payload:[{name:name},{file:file}]
    }
}
*/

export const addBook = (name,file) =>{
    let fd = new FormData()
    fd.append("name",name)
    fd.append("image",file)
    return dispatch =>{
        axios.post(URL,fd)
            .then(resp => dispatch({type:'BOOK_ADD',payload:resp.data}))
    }
}