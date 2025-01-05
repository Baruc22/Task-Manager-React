import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

//modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskComponent = ({task, complete, remove}) => {


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

    // Function that returns icon depending on completion of the task
    function taskCompletedIcon(){
        if(task.completed){
            return(<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return(<i onClick={ () => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
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
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>
    );
};

//Es de buena práctica definir los "proptypes" de los componentes
TaskComponent.propTypes = {
    //El componente superior tendra que pasarle una tarea al componente actual
    task: PropTypes.instanceOf(Task).isRequired, //con .isRequered se obliga a mandar este prop como parametro del componente actual
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
