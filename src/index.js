import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadimos Bootstrap a nuestro proyecto 
import 'bootstrap/dist/css/bootstrap.css'; //Archivo que nos permite acceder a todos los estilos de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
//! Importante: los estilos propios, deben ir debajo del de bootstrap para que no los sobreponga
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';


//Se obtiene la referencia al div "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderiza lo que hay entre parentesis (funcion: render)
// App -> es el componente principal de la aplicación (es lo que se esta renderizando)
root.render( 
  <React.StrictMode>
    {/* <App />  */}
    <AppRoutingOne/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
