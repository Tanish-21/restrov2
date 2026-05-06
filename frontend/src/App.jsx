import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entry from './pages/auth/Entry';
import Login from './pages/auth/Login';
import Verify from './pages/auth/Verify';
import Home from './pages/dashboard/Home';
import Order from './pages/dashboard/Order';
import Search from './pages/dashboard/Search';
import Profile from './pages/dashboard/Profile';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/home" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}