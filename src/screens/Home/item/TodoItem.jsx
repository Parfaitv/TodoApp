import React from 'react'
import Check from './Check'
import {MdOutlineDeleteForever} from 'react-icons/md'




const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className='flex items-center justify-between mb-5 rounded-2xl bg-gray-800 p-4 w-full'>

      <button 
        className='flex items-center w-full h-full'
        onClick={() => changeTodo(todo._id)}
        >
        <Check isCompleted={todo.isCompleted} />
        <span 
          className={`${todo.isCompleted ? 'line-through' : ''} ml-2`}
          >  
          {todo.title}
        </span>
      </button>

      <button onClick={() => removeTodo(todo._id)}>
        <MdOutlineDeleteForever size={24} className='text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'/>
      </button>

    </div>
  )
}

export default TodoItem
