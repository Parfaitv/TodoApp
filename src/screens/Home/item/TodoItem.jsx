import React from 'react'
import Check from './Check'
import Delete from './Delete'



const TodoItem = ({todo}) => {
  return (
    <div className='flex content-between mb-4 rounded-2xl bg-gray-800 p-5'>
        <Check isCompleted={todo.isCompleted}/>
        {todo.title}
        <Delete />
    </div>
  )
}

export default TodoItem
