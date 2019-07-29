import React from 'react';
import { FilterType } from './TodoApp';
import { ITodoItem, TodoItem } from './TodoItem';

interface TodoListProps {
  items: ITodoItem[];
  changeIsActive: (id: number) => void;
  delete: (id: number) => void;
  filter: FilterType;
  className?: string;
}

function TodoList(props: TodoListProps) {
  return (
    <div className={`todo-list ${props.className}`}>
      {props.items.map((item: ITodoItem) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            changeIsActive={props.changeIsActive}
            delete={props.delete}
            className='todo-app__todo-item'
          />
        );
      })}
    </div>
  );
}

export { TodoList };
