/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiendo cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}



export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiendo cuando el componente recibe nuevos props o cambio en su estado privado')
    }); //Sin los corchetes se ejecutara siempre que haya un cambio, ya sea en el estado, en los props, etc.

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}