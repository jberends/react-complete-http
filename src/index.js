import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('[REQ]',request);
    // possibly add auth headers here.
    return request;
}, error => {
    console.log('[ERROR]',error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('[RES]',response);
    return response;
}, error => {
    console.log('[ERROR]',error);
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
