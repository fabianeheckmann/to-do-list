import React from 'react';


const ToDo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div>
         <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className='content'>
            <p>{todo.text}</p>
          </div>
          <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}>completar</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
          </div>
         </div>
    </div>
  )
}

export default ToDo
