import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
