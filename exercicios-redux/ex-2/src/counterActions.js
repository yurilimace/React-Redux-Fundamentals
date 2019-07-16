export function Inc(){
    return{
        type:'INC'
    }
}

export function Dec(){
    return{
        type:'DEC'
    }
}

export function Change(e){
    return{
        type:'CHANGED',
        payload:+e.target.value
    }
}