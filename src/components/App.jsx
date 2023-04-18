import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Tweets from 'pages/Tweets';
import Home from 'pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
