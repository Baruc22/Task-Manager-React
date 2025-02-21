import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:',location.pathname) //Devuelve la ruta en este caso: '/about' | '/faqs'

    const navigate = (path) => {
        history(path); //Cambia la URL en la barra de direcciones del navegador a en 'path'
    }

    const goBack = () => {
        history(-1); //Navega hacia atras
    }

    const goForward = () => {
        history(1); //Navega hacia adelante
    }

    //--------------------------------------------


    const navigateProps = (path) => {
        //'?online=true' -> paso de parametro por Query Params
        history( path + '?online=true', { state: {online: true} } );
    }
        

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
            <button onClick={goBack}>
                Go Back
            </button>
            <button onClick={goForward}>
                Go Forward
            </button>
        </div>
    );
}

export default HomePage;
