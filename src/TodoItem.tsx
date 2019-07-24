import React from 'react';

export interface ITodoItem {
  id: number;
  text: string;
  isActive: boolean;
}

interface TodoItemProps {
  item: ITodoItem;
  changeIsActive: (id: number) => void;
  delete: (id: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const setClassNameIfDone = () => {
    if (!props.item.isActive) {
      return 'done';
    }
  };

  return (
    <div>
      <button
        className='done-button'
        onClick={() => props.changeIsActive(props.item.id)}
      >
        Done
      </button>
      <button
        className='delete-button'
        onClick={() => props.delete(props.item.id)}
      >
        X
      </button>
      <div className={`todoItem ${setClassNameIfDone()}`}>
        {props.item.text}
      </div>
    </div>
  );
}

export { TodoItem };
