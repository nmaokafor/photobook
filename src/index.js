import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';
import Home from './Components/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter>
    <Switch>
        <Route exact path="/photobook" component={Main}/>
        <Route exact path="/" component={Main}/>
    </Switch>
    
</BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
