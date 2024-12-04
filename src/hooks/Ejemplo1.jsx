/**
 * Ejemplo de uso del Hook useState
 * 
 * crear un componente de tipo función y acceder a su estado privado
 * a través de un Hook y poder modificarlo
 */

//importar "useState"
import React, {useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador

    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre : 'Baruc',
        email : 'correo@email.com'
    }

    /**
     * Queremos que el "valorInicial" y "personaInicial" sean parte
     * del estado del componente, para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementaContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Función para actualizar el estado persona en el componente
     */
    function actualizarPersona(nombre){
        setPersona(
            {
                nombre : "Pablo",
                email : 'correo@email.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador} </h2>
            <h2> DATOS DE LA PERSONA </h2>
            <h3> Nombre: {persona.nombre} </h3>
            <h3> Email: {persona.email} </h3>
            {/* Bloque de botones para actualizar el estado del componente*/}
            <button onClick={incrementaContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
