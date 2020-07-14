import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Take dog for a walk', 'Take the rabbish out']);
  return (
    <div className="App">
     <h1>Hello world</h1>
     <input />
     <button>Add todo</button>

     <ul>
       <li></li>
       <li></li>
     </ul>
    </div>
  );
}

export default App;
