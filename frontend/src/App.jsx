import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entry from './pages/auth/Entry';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/dashboard/Home';
import Order from './pages/dashboard/Order';
import Search from './pages/dashboard/Search';
import Profile from './pages/dashboard/Profile';
import './index.css';
import ProtectedRoutes from './components/ProtectedRoutes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Register />} />
      <Route path="/home" 
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route path="/order" element={
        <ProtectedRoutes>
          <Order />
        </ProtectedRoutes>
      } />
      <Route path="/search" element={
        <ProtectedRoutes>
          <Search />
        </ProtectedRoutes>
      } />
      <Route path="/profile" element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      } />
    </Routes>
  );
}