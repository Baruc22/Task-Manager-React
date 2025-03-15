import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to Observable');

        //Nos subscribimos al observable
        getNumbers.subscribe(
            {
                next(newNumber){ //Se ejecuta cada que hay u nuevo valor
                    console.log('New Number',newNumber);
                    setNumber(newNumber);
                },
                error(error){//Se ejecuta cuando se completa o ha habido un error
                    alert(`Something went wrong: ${error}`);
                    console.log('Error in observable');
                },
                complete(){ //Termina con todo
                    alert(`Finished with: ${number}`);
                    console.log('Done with the observable');
                }
            }
        )
    }

    return (
        <div>
            <h1> Number: {number} </h1>
            <button onClick={obtainNewNumbers}>Obtain new Numbers</button>
        </div>
    );
}

export default ObservableExample;
