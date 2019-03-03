import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Composing'
//import Tick from '../src/Components/Tick'
import Cont from '../src/Components/Counter'
//import Composing from '../src/Components/Composing'

ReactDOM.render(<Cont label = "Counter" initialValue = {10} />,document.getElementById('root'))

/*
setInterval(() => {
    ReactDOM.render(<Tick/>,document.getElementById('root'));
}, 1000);
*/
