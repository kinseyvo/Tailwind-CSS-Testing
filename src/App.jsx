import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`} data-mode={darkMode ? 'dark' : 'light'}>
      <button className="absolute top-4 right-4 px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="card">This is a card.</div>
      <div className="card rounded-none">This is another card.</div>
      <section className="h-screen bg-indigo-800 flex items-center justify-center m-12 text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae ratione aspernatur ipsa veniam, praesentium impedit esse voluptate! Non, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae ratione aspernatur ipsa veniam, praesentium impedit esse voluptate!
        </p>
      </section>
    </div>
  )
}

export default App;