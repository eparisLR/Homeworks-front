import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListHomeworks from './components/homeworks/ListHomeworks';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeworksEdit from './components/homeworks/HomeworksEdit';
import HomeWorkCreate from './components/homeworks/HomeworkCreate';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ListHomeworks />} />
          <Route path="modify/:id" element={<HomeworksEdit />} />
          <Route path="new" element={<HomeWorkCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
