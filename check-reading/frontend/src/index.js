import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Routes/router'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'
import reducers from './Reducers/reducers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Template/custom.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus,faTrash,faSearch,faImage,faCheck,faThumbsUp,faUndo} from '@fortawesome/free-solid-svg-icons'

library.add(faBook,faPlus,faTrash,faSearch,faImage,faCheck,faThumbsUp,faUndo)

const store = applyMiddleware(thunk,promise,multi)(createStore)(reducers)

ReactDOM.render(<Provider store={store}> <Route /> </Provider>,document.getElementById('root'));
