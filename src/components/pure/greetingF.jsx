import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //age: Es la variable que se inicializa en 29
    //Estructura:
    //const [variable, método_para_actualizarla] = useState(valar_inicial);
    const [age, setage] = useState(29); 

    //Método birthday
    const birthday = () => {
        //Actualiza el State
        setage(age+1)

    }

    return (
        <div>
            <h1>
                !HOLA {props.name /*Se concatenara la propiedad name del componente que envie esa inf.*/} desde componente funcional¡
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}> 
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
