import { useState } from 'react'
import './App.css';
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm';
import Search from './components/search';

function App() {
  const [toDo, setAll] = useState([
    {
      id: 1,
      text: "testes",
      category: "trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "compras",
      category: "pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "javascript",
      category: "estudos",
      isCompleted: false
    }
  ]);

  const [ search, setSearch ] = useState("");

  const addToDo = (text, category) => {
    const newToDos = [
      ...toDo,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setAll(newToDos);
  };

  const removeTodo = (id) => {
    const newTodos = [...toDo]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setAll(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...toDo]
    newTodos.map((todo) =>
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setAll(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className='todo-list'>
        {toDo.filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
        ).map((todo) => (
            <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <ToDoForm addToDo={addToDo} removeTodo={removeTodo} />
    </div>
  )
}

export default App;
