import React from 'react'
import ReactDom from 'react-dom'
import Counter from './Counter'
import {Provider} from 'react-redux'
import counterReducer from './counterReducer'
import { combineReducers,createStore } from 'redux'

const element = document.getElementById('root')
const reducers = combineReducers({
    counter:counterReducer
})

ReactDom.render(<Provider store={createStore(reducers)}>
        <Counter/>  
    </Provider>,element);
