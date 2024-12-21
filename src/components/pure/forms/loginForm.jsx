/**
 * Componente de va acontener un formulario para autenticación de usuarios 
 */

import React, {useState} from 'react';

const LoginForm = () => {


    const initialCredentials = [  
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
