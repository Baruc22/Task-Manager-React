import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'


const AboutPage = () => {

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

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go to Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
