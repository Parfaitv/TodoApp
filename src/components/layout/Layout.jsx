import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-900 h-screen bg-cover'>
      <header className='py-2 text-white mb-9 border-2 border-gray-900 border-b-violet-600 shadow-lg shadow-violet-800' >
        <div className='flex items-center justify-between'>
          <h2 title='Click me!' className='text-xl font-bold m-2 hover:text-pink-600 transition-colors ease-in-out duration-500'> <a href="http://localhost:3000/">Parfaitv</a></h2>
          <h1 title='Don`t click' className='text-2xl font-bold m-2 hover:text-pink-600 transition-colors ease-in-out duration-500'>Todo App</h1>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout
