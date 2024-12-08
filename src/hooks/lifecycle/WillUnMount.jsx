/**
 * Ejemplo de uso del método componentWillUnMount para componente clase.
 * Ejemplo de uso de hooks para componente funcional.
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {        
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

