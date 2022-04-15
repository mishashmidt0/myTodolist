import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/app/App';
import AppWithReducer from "./pages/app/AppWithReducer";
import {store} from "./store/redux";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <AppWithReducer/>
    </Provider>, document.getElementById('root'));



