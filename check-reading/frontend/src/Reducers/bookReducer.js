const INITIAL_STATE = {
    name:'Nbook',
    list:[{
        name:'Nbook1',
        finished:true
    },{
        name:'Nbook2',
        finished:false
    }]
}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'NAME_CHANGED':
            return{...state,name:action.payload}
        case 'BOOK_ADD':
            return{...state,list:[...state.list,{name:action.payload}]}    
        default:
            return state
    }
}