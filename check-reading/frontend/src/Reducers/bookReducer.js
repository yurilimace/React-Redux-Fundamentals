const INITIAL_STATE = {
    name:'Nbook',image:null,
    list:[{
        name:'Nbook1',
        image:null,
        finished:true
    },{
        name:'Nbook2',
        image:null,
        finished:false
    }]
}




export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'NAME_CHANGED':
            if(action.payload === ''){
                console.log(action.payload)
                return INITIAL_STATE
            }
            return{...state,name:action.payload}
        case 'UPLOAD_DONE':
            return{...state,image:action.payload}
        case 'SEARCH':
            let flist = state.list.filter((item)=>{return item.name.indexOf(state.name) !== -1 })
            console.log("entrou")
            return{...state,list:flist}
        case 'BOOK_ADD':
        console.log(action.payload)    
        return{...state,list:[...state.list,state]}
        case 'REFRESH':
            return {...state,list:action.payload.data}
        default:
            return state
    }
}