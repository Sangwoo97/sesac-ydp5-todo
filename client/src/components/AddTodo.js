import React, { useState } from 'react';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({ title: '' });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({ title: '' });
  };
  return (
    <div className='AddTodo'>
      <input
        className='addInput'
        type='text'
        placeholder='Add your new todo'
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
