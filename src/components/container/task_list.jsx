import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example','Description1',true,LEVELS.NORMAL)
    const defaultTask2 = new Task('Example','Description2',false,LEVELS.URGENT)
    const defaultTask3 = new Task('Example','Description3',false,LEVELS.BLOCKING)

    //Definir un estado a partir de useState
    //ESTADO DEL COMPONENTE
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, []);

    const changeCompleted = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>            
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            {/* Columnas de la tabla */}
                            <thead>
                                <tr>
                                    <th scope='col'> Title </th>
                                    <th scope='col'> Description </th>
                                    <th scope='col'> Priority </th>
                                    <th scope='col'> Actions </th>
                                </tr>
                            </thead>
                            {/* Cuerpo de la tabla */}
                            <tbody>
                                {tasks.map((task,index) => {
                                            return(
                                                <TaskComponent key={index} task={task} ></TaskComponent>
                                            )
                                        }
                                    )
                                }
                                
                            </tbody>    
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;
