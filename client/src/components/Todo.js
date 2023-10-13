import React, { useState } from 'react';

export default function Todo({ items, deleteItem, updateItem }) {
  const [readOnly, setReadOnly] = useState(false);
  const [todoItem, setTodoItem] = useState(items);
  const { id, done, title } = todoItem;

  const onDeleteButtonClick = () => {
    deleteItem(items);
  };

  const editKeyEventListener = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem);
    }
  };

  const editKeyHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  const checkboxEventListener = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        margin: '12px 0',
        alignItems: 'center',
      }}
    >
      <input
        className='boxCheck'
        type='checkbox'
        name={`todo${id}`}
        id={`todo${id}`}
        checked={done}
        onChange={checkboxEventListener}
      />
      <input
        className='boxContent'
        type='text'
        readOnly={readOnly}
        onClick={() => setReadOnly(false)}
        value={title}
        onChange={editKeyHandler}
        onKeyDown={editKeyEventListener}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
