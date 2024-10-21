import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // or your auth state management

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.login.value); // Adjust this based on how you track authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
