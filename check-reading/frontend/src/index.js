import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Routes/router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus,faTrash,faSearch,faImage,faCheck,faThumbsUp,faUndo} from '@fortawesome/free-solid-svg-icons'

library.add(faBook,faPlus,faTrash,faSearch,faImage,faCheck,faThumbsUp,faUndo)


ReactDOM.render(<Route />, document.getElementById('root'));
