import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/css/mdb.min.css';
import 'mdbootstrap/css/style.css';
import 'mdbootstrap/css/style.min.css';

import { store } from './_helpers'
render(
  	<Provider store={store}>
        <App />
    </Provider>,
   document.getElementById('root')
);
