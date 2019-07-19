import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    book:()=>({
        name:'Nbook',
        list:[{
            name:'Nbook1',
            finished:true
        },{
            name:'Nbook2',
            finished:false
        }]
    })
})

export default rootReducer