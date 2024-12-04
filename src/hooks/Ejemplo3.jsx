/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

//Inicializamos un estado vacio que va a rellenarse con los 
//datos del contexto del padre
const miContexto = React.createContext(null)

/** 
 * El componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/*Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Crear el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'abcdefg',
                sesion: sesionData.sesion + 1
            }
        )
    }


  return (
    /**
    * Se le pasa al contexto los datos de "sesionData" como un ".Provider".
    * Estos datos se inyectan inyectan/pasan al Componente1 y a su vez como este componente
    * inta al componente 2, entonces el componente 2 también tendra acceso a los datos de "sesionData" 
    */ 
    <miContexto.Provider value={sesionData}>
    {/*Todo lo que esta aquí dentro, puede leer los datos de sesionData */}
    {/*Además si se actualiza los componentes de aquí también lo actualizan */}
    <h1>*** Ejemplo de useState() y useContext() *** </h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion} >Actualizar Sesión</button>
    </miContexto.Provider>
  )
}



