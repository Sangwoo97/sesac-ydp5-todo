import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const result = await axios.get(`${process.env.REACT_APP_DB_HOST}/todo`);
      setTodoItems(result.data);
    };

    getTodo();
  }, []);

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
