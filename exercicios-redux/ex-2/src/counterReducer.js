const INITIAL_STATE = {number:0,step:1}

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case 'INC':
            return{...state,number:state.number+state.step}
        case 'DEC':
            return{...state,number:state.number - state.step }
        case 'CHANGED':
            return{...state,step:action.payload}
        default: return INITIAL_STATE
    }
}