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
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware())));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
        <div>
            <Header />
            <Route path="/" component={App} exact={true} />
        </div>
        </Switch>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
