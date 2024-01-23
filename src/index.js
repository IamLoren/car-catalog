import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import Global from './css/common.js';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter /*basename="/car-catalog"*/>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
        <Global/>
    </Provider>
    </PersistGate>
    

  </BrowserRouter>
);

