import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 150;


//Definiendo estilos en constantes:

//? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

//? Estilo para ususario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//------------------- Componentes de tipo función ------------

//Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Logint</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}
//---------------------------------


// ? (Expresión true) && expresión => renderiza la expresión
// ? (Expresión false) && expresión => no renderiza la expresión



const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Logint</button>
    // }

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}

            { access ? (
                <div>
                    {/* N Messages unread */}            
                    {/* Condicion 'if ...' */}
                    {nMessages > 0 && nMessages === 1 && <p> You have {nMessages} new message ... </p>}
                    {nMessages > 1 && <p> You have {nMessages} new messages ... </p>}
                    {nMessages === 0 && <p> There are no new messages </p>}
                    
                    {/* Operador ternario 'if ... else ...' */}
                    {nMessages > 0 ? 
                        <p> You have {nMessages} new message{nMessages > 1 ? 's' : ''} ... </p> : 
                        <p> There are no new messages </p>}

                    <button onClick={addMessages} > {nMessages === 0 ? 'Add your firt message' : 'Add new Message'} </button>
                </div>
                ) : null  }          
        </div>
    );
}

export default OptionalRender;
