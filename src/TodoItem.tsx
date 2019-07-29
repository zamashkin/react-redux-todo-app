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
  className?: string;
}

function TodoItem(props: TodoItemProps) {
  const setClassNameActiveOrDone = () => {
    if (!props.item.isActive) {
      return 'done';
    }
    return 'active';
  };

  return (
    <div className={`todo-item ${props.className}`}>
      <button
        className={`todo-item__change-is-active-button
         todo-item__change-is-active-button_${setClassNameActiveOrDone()}`}
        onClick={() => props.changeIsActive(props.item.id)}
      />
      <button
        className="todo-item__delete-button"
        onClick={() => props.delete(props.item.id)}
      >
        X
      </button>
      <div
        className={`todo-item__text todo-item__text_${setClassNameActiveOrDone()}`}
      >
        {props.item.text}
      </div>
    </div>
  );
}

export { TodoItem };
