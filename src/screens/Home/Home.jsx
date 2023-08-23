import React, { useEffect, useState } from 'react'
import TodoItem from "./item/TodoItem"
import CreateTodo from './createTodo/CreateTodo';


const Home = () => {
    const [todos, setTodos] = useState([]);

    const changeTodo = id => {
      const copy = [...todos];
      const current = copy.find(todo => todo._id === id);
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
    }

    const removeTodo = id => {
      setTodos([...todos].filter(t => t._id !== id));
    }

    useEffect(() => {
      const raw = localStorage.getItem('todos') || []
      setTodos(JSON.parse(raw))
    }, [])

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


  return (
    <div className='text-white w-4/5 mx-auto'>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
      ))}
      <CreateTodo setTodos={setTodos} />
    </div>
  )
}

export default Home
