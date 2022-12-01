import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// 이거 없어진 듯
//import { composeWithDevTools } from 'redux-devtools-extension';

// import test from './test';
// store에 middleware 적용 : applyMiddleware 함수 사용
// const store = createStore(rootReducer, applyMiddleware(test));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
