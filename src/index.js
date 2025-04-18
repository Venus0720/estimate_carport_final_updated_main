import React, {useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import './assets/css/app.min.css';
import App from "./App"




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



