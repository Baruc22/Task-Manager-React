import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import {useNavigate} from 'react-router-dom';

const DashBoard = () => {

    const history = useNavigate()

    const logout = () => {
        history('/login')
    }

    return (
        <div>
            <Button variant='contained' onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoard;
