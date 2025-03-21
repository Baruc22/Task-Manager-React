import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Baruc');

    function showMessage(text){
        alert(`Massage received: ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{backgroundColor: 'tomato', padding: '10px'}}>
            <Child send={showMessage} name={name} update={updateName}></Child>
        </div>
    );
}

export default Father;
