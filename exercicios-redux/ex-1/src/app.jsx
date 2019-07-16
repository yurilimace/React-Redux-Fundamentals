import React,{Component} from 'react'
import Field from './Components/Field'
import {combineReducers,createStore} from 'redux'
import {Provider} from 'react-redux'
import FieldReducer from './fieldReducer'
class App extends Component{
    render(){
        const initialValue = "Teste"
        const reducers = combineReducers({
            field:FieldReducer
        })

        return(
            <div>
                <Provider store={createStore(reducers)}>
                    <Field initialValue = {initialValue}/>
                </Provider>
                
            </div>
        )
    }
}

export default App