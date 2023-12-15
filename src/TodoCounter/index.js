import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    
    if(completedTodos !== totalTodos){
        return(
            <h1 className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos</h1>
        );
        
    }else if(completedTodos === totalTodos && totalTodos !== 0){
        return(
            <h1 className='TodoCounter'>Felicidades, has completado todas tus tareas 🎉</h1>
        );
    }else if(totalTodos === 0){
        return(
            <h1 className='TodoCounter'>Agrega una nueva tarea</h1>
        );
        
    }
} 

export {TodoCounter};