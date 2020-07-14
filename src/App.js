import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Take dog for a walk', 'Take the rabbish out']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the refresh
    setTodos([...todos, input]);
    setInput('');   //clear up the input after hitting the todo button

  }
  return (
    <div className="App">
     <h1>Hello world</h1>
     <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

        {/* <button type='submit' onClick={addTodo}>Add todo</button> */}
     </form>
     

     <ul>
       {todos.map(todo => (
         <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
