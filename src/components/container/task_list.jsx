import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description',false,LEVELS.NORMAL)

    return (
        <div>
            <h1>
                Your Tasks:  
            </h1>
            {/* TODO: Aplicar un for/Map para renderizar una lista de tareas */}
            {/*A continuacion utiliza el componente que pintara la tarea definida por default */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
