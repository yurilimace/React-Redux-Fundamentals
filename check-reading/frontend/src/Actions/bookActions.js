export const changeName = (event) =>({
    type:'NAME_CHANGED',
    payload:event.target.value
})

export const addBook = (name) =>({
    type:"BOOK_ADD",
    payload:name
})