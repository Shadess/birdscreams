import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../views/login/Login';

function UnAuthorizedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route element={<Login />} path="login" />
      </Routes>
    </BrowserRouter>
  );
}

export default UnAuthorizedRoutes;
