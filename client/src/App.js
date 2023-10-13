import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    document.body.classList.add('cBody');
    const getTodo = async () => {
      const result = await axios.get(`${process.env.REACT_APP_DB_HOST}/todo`);
      setTodoItems(result.data);
    };

    getTodo();
  }, []);

  const addItem = async (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // // todoItems 배열에 newItem을 추가
    // setTodoItems([...todoItems, newItem]);
    const res = await axios.post(`${process.env.REACT_APP_DB_HOST}/todo`, newItem);
    setTodoItems([...todoItems, res.data]);
  };

  const deleteItem = async (item) => {
    // const temp = todoItems.filter((e) => e.id !== item.id);
    // setTodoItems(temp.sort((a, b) => b.id - a.id));
    const res = await axios.delete(`${process.env.REACT_APP_DB_HOST}/todo/${item.id}`);
    setTodoItems(todoItems.filter((e) => e.id !== item.id));
  };

  const updateItem = async (item) => {
    const res = await axios.patch(`${process.env.REACT_APP_DB_HOST}/todo/${item.id}`, {
      title: item.title,
      done: item.done,
    });
  };

  return (
    <div className='App'>
      <header>TODO APP</header>
      <div className='todoContainer'>
        <AddTodo addItem={addItem} />
        <div className='count'> 💪 총 개수 : {todoItems.length}</div>
        {todoItems.map((e, i) => {
          return <Todo items={e} key={e.id} deleteItem={deleteItem} updateItem={updateItem} />;
        })}
      </div>
    </div>
  );
}

export default App;
