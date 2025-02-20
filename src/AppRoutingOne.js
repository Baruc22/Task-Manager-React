import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>

      <dic>
        <aside>
          <Link to='/'> || HOME | </Link>
          <Link to='/about'> | ABOUT | </Link>
          <Link to='/faqs'> | FAQS | </Link>
          <Link to='/page404'> | Ruta inexistente || </Link>
        </aside>
      </dic>


      <main>
        {/* Se definen el conjunto de rutas */}
        <Routes>
          <Route exact path='/' Component={HomePage} />

          {/* Con esto se tienen dos rutas que cargan el mismo componente */}
          {["/about", "/faqs"].map((path, index) =>
            <Route path={path} Component={AboutPage} key={index} />
          )}

          <Route path='/profile' Component={ProfilePage} />

          <Route path='/tasks' Component={TasksPage}/>

          <Route path='/tasks/:id' Component={TaskDetailPage}/>

          {/* 404 - Page Not Found */}
          <Route path='*' element={<NotFoundPage />} /> {/* Se puede ocupar el atributo 'element' para rederizar los componentes */}
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
