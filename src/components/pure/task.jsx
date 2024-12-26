import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task}) => {


    //Manejo de cambios en el componente con useEffect
    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount` )
        };
    },[task]);


    /**
     * Function that returnig a badge depending 
     * on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:                
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:                
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:                
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return(<i className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else{
            return(<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-meddle'>
                <span>{task.description}</span>
            </td>
            <td className='align-meddle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}                
            </td>
            <td className='align-meddle'>
            {/* Execution of function to return icon dependig on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash' style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task) //El componente superior tendra que pasarle una tarea al componente actual
};


export default TaskComponent;
