import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:categoryId" element={<DetailsPage />} />
      </Routes>
    </>
  );
}
export default App;
