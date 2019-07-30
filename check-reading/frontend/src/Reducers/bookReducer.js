const INITIAL_STATE = {
    name:'Nbook',image:null,search:false,
    list:[]
}




export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'NAME_CHANGED':
            return{...state,name:action.payload,search:false}
        
        case 'UPLOAD_DONE':
            return{...state,image:action.payload}


        case 'SEARCH':
            return{...state,search:true}
        
        case 'BOOK_ADD':   
            return{...state,name:state.name}
        
        case 'REFRESH':
            action.payload.data.map(item => {
                item.image = item.image.data.data
                item.image = btoa(String.fromCharCode.apply(null, new Uint8Array(item.image)))
            })
            console.log(action.payload.data)
            return {...state,list:action.payload.data}


        default:
            return state
    }
}