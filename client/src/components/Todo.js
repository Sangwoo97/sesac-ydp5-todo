import React from 'react';

export default function Todo({ items, deleteItem }) {
  const onDeleteButtonClick = () => {
    deleteItem(items);
  };
  return (
    <div>
      <input type='checkbox' name='todo0' id='todo0' checked={items.done} />
      <label htmlFor={`todo${items.id}`}>{items.title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
