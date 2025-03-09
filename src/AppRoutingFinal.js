import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirecciones para proteger nuestras rutas */}
        <Route path='/' element={loggedIn ? <Navigate to={'/dashboard'} /> : <Navigate to={'/login'} />} />
        {/* Ruta Login */}
        <Route path='/login' element={<LoginPage />} />
        {/* Ruta Dashboard */}
        <Route path='/dashboard' element={loggedIn ? <DashBoard /> : <Navigate to={'/login'} />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>

  );
}

export default AppRoutingFinal;
