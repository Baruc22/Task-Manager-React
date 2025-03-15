import React from 'react';

const AsyncEjample = () => {

    async function generateNumber() {
        return 1;
    }

    function obtainNumber(){
        //Así nos aseguramos de ejecutar la alerta antes de tener el valor.
        //Estas es la mejor manera de gestionar funciones asincronas (como promesa)
        //EL valor no necesariamente estara de forma inmediata, se trata de un valor "futuro"
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Somethin went wrong: ${error}`));
    }

    //--------------------------------------------

    async function generatePromiseNumber() {
        //En este caso se esta definiendo explicitamente que se trata de una promesa
        return Promise.resolve(2)
    }

    function obtainPromiseNumber(){
        //Esto es la mejor forma de gestionar una promesa (.then y .catch)
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    //-----------------------------------------------------

    async function saveSessionStorege(key,value) {
        sessionStorage.setItem(key,value);
        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage(){
        //"response" dentro de then es el "resolve" de la promesa.
        //.then vendria siendo una funcion "callback", algo que se ejecuta no necesariamente de forma inmediata
        saveSessionStorege('name','baruc')
            .then((response) => {
                let value = response;
                alert(`Save Name: ${value}`);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
            .finally(() => console.log("SUCCESS: Name saved and retreived sucessfuly"));
    }

    // ----------------------------------------------------

    async function obtainMessage() {
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => resolve("Hello world"), 2000)
        });
        let message = await promise;
        await alert(`Message received: ${message}`);
    }

    //-------------------------------------------------

    const returnError = async() => {
        await Promise.reject(new Error('Oooooops!'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert(`Finaly executed`));
    }

    //-------------------------------------------------

    const urlNotFound = async() => {
        try {
            let response = await fetch('http://invalidURL.com');
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error} (check your console)`);
        }
    }

    //----------------------------------------------

    //Gestionar varias promesas a la vez.
    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
    }

    return (
        <div>
            <h1>Async, Promise Ejamples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Number</button>
            <button onClick={showStorage}>Save name and show</button>
            <button onClick={obtainMessage}>Receive message in 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromise} >Multiple Promises</button>
        </div>
    );
}

export default AsyncEjample;
