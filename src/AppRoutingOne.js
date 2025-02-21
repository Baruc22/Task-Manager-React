import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, Links } from 'react-router-dom';
import { useEffect } from 'react'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {


  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?',logged);
  },[]); //Con corchetes '[]' se ejecuta en cada cambio de estado del componente.

  // ---------------------- Redirecionando páginas -------------------------------
  const RedirectWithAlert = () => {
    alert('You must be logged in. Redirecting to login...');
    return (<Navigate to="/login" />);
  };


  const RedirectWithHome = () => {
    alert('You are logged in. Redirecting to home...');
    return (<Navigate to="/" />);
  };

  //------------------------ Mandar tareas por direccion URL a otra página -------------------------------

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  const TaskDetailPageWrapper = ({tasks}) => {
    const {id} = useParams();
    const task = tasks.find(t => t.id === parseInt(id,10));
    return (<TaskDetailPage task={task}/>)
  }

  // --------------------------------------------------------------------------


  return (
    <Router>

      <dic>
        <aside>
          <Link to='/'> || HOME | </Link>
          <Link to='/about'> | ABOUT | </Link>
          <Link to='/faqs'> | FAQS | </Link>
          <Link to='/task/1'> | Task 1 | </Link>
          <Link to='/task/2'> | Task 2 | </Link>
          <Link to='/page404'> | Ruta inexistente | </Link>
          <Link to='/login'> | LOGIN || </Link>
        </aside>
      </dic>


      <main>
        {/* Se definen el conjunto de rutas */}
        <Routes>

          {/* NOTA: Se puede ocupar el atributo 'element' o 'Component' para rederizar los componentes */}

          <Route path='/' Component={HomePage} />
          <Route path='/online-state' Component={StatePage} />
          <Route path='/login' element={logged ? <RedirectWithHome/> : <LoginPage/>} />

          {/* Con esto se tienen dos rutas que cargan el mismo componente */}
          {["/about", "/faqs"].map((path, index) =>
            <Route path={path} Component={AboutPage} key={index} />
          )}


          <Route path='/profile' element={logged ? <ProfilePage /> : <RedirectWithAlert/> }/>
          <Route path='/tasks' Component={TasksPage}/>

          {/* Pasar parametros por medio de las rutas */}
          <Route  
            path='/task/:id' 
            element={ <TaskDetailPageWrapper tasks={taskList}/> }
          />

          {/* 404 - Page Not Found */}          
          <Route path='*' element={<NotFoundPage />} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
