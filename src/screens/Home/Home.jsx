import React, { useState } from 'react'
import TodoItem from "./item/TodoItem"
import CreateTodo from './createTodo/CreateTodo';


const Home = () => {
    const [todos, setTodos] = useState([
      {
          _id: '234',
          title: 'Finish task 1',
          isCompleted: false,
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
  ]);

    const changeTodo = id => {
      const copy = [...todos];
      const current = copy.find(todo => todo._id === id);
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
    }

    const removeTodo = id => {
      setTodos([...todos].filter(t => t._id !== id));
    }


  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo App</h1>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
      ))}
      <CreateTodo setTodos={setTodos} />
    </div>
  )
}

export default Home
