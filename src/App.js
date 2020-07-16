import React from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
//when the app loads, we need to listen to the database and fetch new todos as they get added/removed
 useEffect(() => {
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => doc.data().todo))

   })
   
 }, []);

const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');   //clear up the input after hitting the todo button

  }
  return (
    <div className="App">
     <h1>Hello world</h1>
     <form>     
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

        {/* <button type='submit' onClick={addTodo}>Add todo</button> */}
     </form>
     

     <ul>
       {todos.map(todo => (
         <Todo text={todo} />
         //<li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
