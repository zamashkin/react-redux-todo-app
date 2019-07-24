import React from 'react';
import { FilterType } from '.';
import { ITodoItem, TodoItem } from './TodoItem';

interface TodoListProps {
  items: ITodoItem[];
  changeIsActive: (id: number) => void;
  delete: (id: number) => void;
  filter: FilterType;
}

function TodoList(props: TodoListProps) {
  return (
    <div className='todoList'>
      {props.items.map((item: ITodoItem) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            changeIsActive={props.changeIsActive}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
}

export { TodoList };
