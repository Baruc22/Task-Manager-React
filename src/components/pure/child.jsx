import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const namegeRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value //Esto nos permite acceder al valor del elemento
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Alert: ${text}`);

    }

    function submitName(e){
        //Con esto se evita que se secargue la página al ejcutar el evento de submit
        e.preventDefault();
        //Con esto se consegue que la funcion que se recibe por props se ejecute en el componente padre 
        update(namegeRef.current.value)
    }

    return (
        <div style={{backgroundColor: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Hello, {name}</p>
            <button onClick={() => console.log('Press Button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input 
                placeholder='Insert a text'
                onFocus={() => console.log('Input Focused')}
                //Recupera del valor que se escribe en el input, gracias a la propiedad "target.value"
                onChange={(e) => console.log('Input changed:',e.target.value)}
                //Detecta cuando el contenido del input es copiado
                onCopy={() => console.log('Copied text from Input')}
                //Se recupera la referencia del elemento
                ref={messageRef}
            />

            {/* Se ejecutaria una funcion de orden superior. Esto permite la comunicación de hijo -> padre */}
            <button onClick={() => send(messageRef.current.value)}> {/* Se recupera el contenido del input y se envia al padre */}
                Send Message
            </button>

            {/* Ejemplo de formulario */}
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={namegeRef} placeholder='New name' />
                    <button type='submit'> Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
