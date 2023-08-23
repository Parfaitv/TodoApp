import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CreateTodo = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = title => {
      if(title.trim().length){
        setTodos(prev => [
          {
            _id: uuidv4(),
            title,
            isCompleted: false
          },
          ...prev
        ])
        setTitle('')
      }
    }

  return (
    <div className='flex items-center justify-between mb-5 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'>
      <input 
      type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && addTodo(title)}
      className='bg-transparent w-full border-none outline-none'
      placeholder='Add a task'
      />
    </div>
  )
}

export default CreateTodo
