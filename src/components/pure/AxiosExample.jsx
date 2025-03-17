import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosSercice';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUser();
    // }, []);

    const obtainUser = () => {
        getRandomUser()
            .then((responce) => {
                if (responce.status === 200) {
                    setUser(responce.data.results[0]);
                }
            })
            .catch((error) => {
                console.log(`Somethin went wrong: ${error}`);
            })
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ? (
                <div>
                    <img alt='avatar' src={user.picture.large} />
                    <h2> Name: {user.name.title} {user.name.first} {user.name.last} </h2>
                    <h3> {user.email} </h3>
                </div>

            ) : (
                <div>
                    <p> Generate a new User </p>
                    <button onClick={obtainUser}>Random User</button>
                </div>
            )}
        </div>
    );
}

export default AxiosExample;
