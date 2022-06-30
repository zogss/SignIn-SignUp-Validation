import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main"

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/index" element={<Main />} />
    </Routes>
  );
};

export default AuthRoutes;
