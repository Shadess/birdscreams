import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../views/login/Login';
import SignUp from '../views/login/SignUp';

function UnAuthorizedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default UnAuthorizedRoutes;
