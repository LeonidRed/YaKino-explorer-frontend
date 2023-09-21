import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ element: Component, ...props }) {

  const { pathname } = useLocation();

  return (
    props.isLogged ? <Component {...props} /> : <Navigate to={pathname} />
  )
}