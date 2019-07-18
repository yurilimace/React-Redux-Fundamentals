import axios from 'axios'

const URL = 'http://localhost:3003/api/todo'

export const changeDescription = (event) =>({
    type:'DESCRIPTION_CHANGED',
    payload:event.target.value
})

export const search = () =>{
    const request = axios.get(`${URL}?sort=-createdAt`)
    return{
        type:'SEARCHED',
        payload:request
    }
}

export const add = (description) =>{
    return dispatch =>{
        axios.post(URL,{description})
        .then(resp=> dispatch({type:'ADD',payload:resp.data}))
        .then(resp=> dispatch(search()))
    }
}

export const MarkAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo,done:true})
        .then(resp => dispatch({type:'TODO_MARKED_AS_DONE',payload:resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const MarkAsPending = (todo) =>{
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo,done:false})
        .then(resp => dispatch(search()))
    }

}

export const Remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}