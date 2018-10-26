import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/css/mdb.min.css';
import 'mdbootstrap/css/style.css';
import 'mdbootstrap/css/style.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { store } from './_helpers';

/*# SCSS*/
import 'react-image-gallery/styles/scss/image-gallery.scss';

/*# CSS*/
import 'react-image-gallery/styles/css/image-gallery.css';

/*# Webpack*/
import 'react-image-gallery/styles/css/image-gallery.css';
/*
# Stylesheet with no icons
node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss
node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css
*/
import 'react-image-gallery/styles/scss/image-gallery-no-icon.scss';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';

ReactDOM.render(
		<Provider store={store}>
			<Router>
		        <App />
	        </Router>
	    </Provider>,
   document.getElementById('root')
);
