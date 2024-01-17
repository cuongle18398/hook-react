import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState('Eric')

  const [todos, setTodo] = useState([
    { id: 'todo1', title: 'Watching TV' },
    { id: 'todo2', title: 'Doing Homework' },
    { id: 'todo3', title: 'Playing Game' }
  ])

  const handleEventClick = () => {
    setName('Cuong');
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
        </p>
        <button type="button" onClick={() => handleEventClick()}> Click Me </button>
        <div className='todo-container'>
          {todos && todos.length > 0 &&
            todos.map((item, index) => {
              return (
                <div>
                  <li className='todo-child' key={item.id}>{item.id} - {item.title}</li>
                </div>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
