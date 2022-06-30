import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes: React.FC = () => {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Routes;
