import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import EditUser from './components/EditUser';
import PrivateRoute from './utils/PrivateRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<PrivateRoute component={<Users />} />} />
      <Route path="/edit/:id" element={<PrivateRoute component={<EditUser />} />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;