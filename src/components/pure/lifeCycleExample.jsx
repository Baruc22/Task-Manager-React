/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * métodos del ciclo de vida.
 */

import React, {Component} from "react";
import PropTypes from 'prop-types';

class LifeCycleExample extends Component{

    //Inicialixación de variables o estados del componente
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(){
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(){
        /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(){
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(){
        console.log('DidUpdate: Justo después de actualizarse')
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }

    
}