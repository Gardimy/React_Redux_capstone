import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/categoryReducer';
import './App.css';
import Navbar from './components/Navbar';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/Homepage';

const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:categoryId" element={<DetailsPage />} />
      </Routes>
    </Router>
  </Provider>,
);
