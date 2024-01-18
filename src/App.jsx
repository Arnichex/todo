import './App.css';

import { useState } from 'react';
function App() {
  ///let lista =["mancare","somn"];
  const[todo,setTodo]=useState("");
  const [lista,setLista] = useState([]) ;
  function adauga(){
  setLista([...lista,todo]);
  setTodo("");
  }
function sterge(){
  setLista([]);
}
  return (
    <div>
      <input 
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      placeholder="Ce trebuie sa fac "/>
      <h1>{todo}</h1>
      <button onClick={() => }}>Adauga</button>
      <ol>
       {
        lista.map((el) => {
          return (
            <li>{el}</li>
          )  
        })
       }
      </ol>

    </div>
  );
}

export default App;
