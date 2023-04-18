import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from '../views/main/Main';

function AuthorizedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Need to redirect away from Login */}
        <Route path="login" element={<Navigate to="/" />} />{' '}
        <Route element={<Main />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default AuthorizedRoutes;
