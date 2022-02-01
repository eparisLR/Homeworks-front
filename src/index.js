import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListHomeworks from './components/homeworks/ListHomeworks';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeworksEdit from './components/homeworks/HomeworksEdit';
import HomeWorkCreate from './components/homeworks/HomeworkCreate';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import LoginPage from './components/authentication/LoginPage';
import ProtectedRoute from './auth/ProtectedRoute';

ReactDOM.render(
    <BrowserRouter>
      <Auth0ProviderWithHistory>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <ProtectedRoute path="/homeworks" element={<App />}>
            <ProtectedRoute index element={<ListHomeworks />} />
            <ProtectedRoute path="modify/:id" element={<HomeworksEdit />} />
            <ProtectedRoute path="new" element={<HomeWorkCreate />} />
          </ProtectedRoute>
        </Route>
      </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
