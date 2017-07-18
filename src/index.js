import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, indexRoute, browserHistory } from 'react-router'


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './components/app/App';
import Lienzo from './components/lienzo/Lienzo';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Lienzo />, document.getElementById('root'));
registerServiceWorker();
