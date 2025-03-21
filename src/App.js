import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'; //Se importa del componente .JSX
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncEjample from './components/pure/AsyncEjample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';

//Componente de tipo funcion
function App() {
  //Se devuelve un elemento div de html
  //IMPORTAMTE: Los componentes devuelven un unico elemento. (Ejemplo: Un solo div)
  return (
    <div className="App">

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* *** Componente propio Greeting.jsx *** */}
        {/* *** Se le pasa la propiedad name = "Baruc" *** */}
        {/* *** Es un componente de tipo clase *** */}
        {/*<Greeting name="Baruc"></Greeting>*/}

        {/* *** Es un componente de tipo función *** */}
        {/*<GreetingF name="Baruc" ></GreetingF>*/}

        {/* *** Componente de listado de tareas *** */}
        {/*<TaskListComponent></TaskListComponent>*/}

        {/* *** Ejemplos de uso de HOOKS *** */}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}

        {/* <Ejemplo4 nombre='Baruc'>
          {/* *** Todo lo que hay aquí, es tratado como props.children en cualquier componente *** */}
          {/*<h3>
            Contenido del props.children 1
          </h3>
          <h3>
            Contenido del props.children 2
          </h3>
        </Ejemplo4> */}

        {/* *** Ejemplo de componente con estilos dinamicos *** */}
        {/*<GreetingStyled name="Citlali" ></GreetingStyled>*/}
      {/* </header> */}

            
      {/* *** Gestión de eventos (ejemplo de formulario) *** */}
      {/* <Father></Father> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      
      {/* Ejemplos del uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}      
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncEjample></AsyncEjample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <AxiosCRUDExample></AxiosCRUDExample>

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}

    </div>
  );
}

export default App;
