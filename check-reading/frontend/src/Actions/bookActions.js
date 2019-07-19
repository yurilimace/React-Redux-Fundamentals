export const changeName = (event) =>({
    type:'NAME_CHANGED',
    payload:event.target.value
})