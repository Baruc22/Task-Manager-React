import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    //props: informacion que se pasa como atributos al componente.
    constructor(props){
        super(props);
        //state: dato o valor totalmente privado. Información del componente que puede modificarse
        // y al ser modificado se actualizaria la vista. Sirve para gestionarse o mostrar el contenido 
        //de que deba mostrar, o alguna logica. "Propiedades de la clase"
        this.state = {
            age : 29

        }
    }

    render() {
        return (
            <div>
                <h1>
                    !HOLA {this.props.name /* Se concatenara la propiedad name del componente que envie esa inf. */}¡
                </h1>
                <h2>
                    Tu edad es de: {this.state.age /* Se accede a los datos privados del componente actual */}
                </h2>
                <div> {/*Se coloca el boton para que se ejecute el metodo "birthday" cuando se haga click*/}
                    <button onClick={this.birthday} > 
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    //Funcion flecha para poder utilizar "this" asociado a la clase
    birthday = () => { 
        //Se actualizara el estado actual.
        //Se recibe el estado previo con prevState
        this.setState((prevState) => (
            {
                age: prevState.age + 1 //Se suma 1 al estado anterior y 
            }
        ))
    }
}


Greeting.propTypes = {

    name:PropTypes.string, /*Name sera de tipo string */

};


export default Greeting;
