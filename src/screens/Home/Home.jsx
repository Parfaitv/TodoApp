import React from 'react'
import TodoItem from "./item/TodoItem"


const Home = () => {
    const data = [
        {
            _id: '234',
            title: 'Finish task 1',
            isCompleted: true,
        },
        {
            _id: '235',
            title: 'Finish task 2',
            isCompleted: false,
        },
        {
            _id: '236',
            title: 'Finish task 3',
            isCompleted: false,
        },
    ]

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo App</h1>
      {data.map(todos => (
        <TodoItem key={todos._id} todo={todos}/>
      ))}
    </div>
  )
}

export default Home
