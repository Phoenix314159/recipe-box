import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
