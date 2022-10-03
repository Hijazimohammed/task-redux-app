import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './Resources/css/custom.css';
import './Resources/css/dashboard.css';
import AppRoutes from './Routes/AppRoutes';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import appReduxStore from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appReduxStore}>
    <AppRoutes />
  </Provider>
);
