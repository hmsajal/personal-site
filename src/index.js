import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css'
import './styles/fonts.css'


ReactDOM.render(<App/>,document.getElementById('root')
);

serviceWorker.unregister();