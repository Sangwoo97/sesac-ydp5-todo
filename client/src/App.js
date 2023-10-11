import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import React, { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);

  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    // todoItems 배열에 newItem을 추가
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (item) => {
    const temp = todoItems.filter((e) => e.id !== item.id);
    setTodoItems(temp);
  };

  return (
    <div className='App'>
      <AddTodo addItem={addItem} />
      {todoItems.map((e, i) => {
        return <Todo items={e} key={e.id} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;
