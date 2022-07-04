import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'
import {goodsStore} from './store/goodsStore.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={goodsStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);