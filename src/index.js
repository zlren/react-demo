import React from 'react'
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import config from './config'; // 加载它使之生效
import reducers from './reducers';


// 根据一个函数去创建store，一个应用应该只有一个store
// 一个reducer也许可以，但是系统多了以后会过于复杂，后面应该要reducer的拆分，按业务
const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
