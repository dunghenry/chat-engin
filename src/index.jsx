import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
import { ToastContainer } from 'react-toastify';
const persistor = persistStore(store);
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
            <ToastContainer />
            {/* </PersistGate> */}
        </Provider>
    </BrowserRouter>,
    // </React.StrictMode>,
);
