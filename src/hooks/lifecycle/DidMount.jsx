/**
 * Ejemplo de uso del método 
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional 
 */


import React, { Component,useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {


    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')        
    },[]); //Si queremos que se ejcute solo una vez, se ponen solo corchetes (cada vez que se renderiza)

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

