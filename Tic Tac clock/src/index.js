import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Composing'
import Tick from './Tick'

setInterval(() => {
    ReactDOM.render(<Tick />,document.getElementById('root'));
}, 1000);

