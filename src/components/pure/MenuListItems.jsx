import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Home, Settings} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
            break;
        case 'TASKS':
            return (<Home/>)
            break;
        case 'SETTINGS':
            return (<Settings/>)
            break;
        default:
            break;
    }
}

const MenuListItems = ({list}) => {

    const history = useNavigate()

    const navigateTo = (path) => {
        history(path)
    }

    return (
        <List>
            {list.map(({text,path,icon},index) =>
            (
                <ListItem key={index} button onClick={() => navigateTo( path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    )
}

export default MenuListItems;