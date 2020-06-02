import * as React from 'react';

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
        return 'active';
    };

    return (
        <div className="todo-item todo-app__todo-item">
            <button
                className={`todo-item__change-is-active-button
        todo-app__change-is-active-button ${setClassNameIfDone()}`}
                onClick={() => props.changeIsActive(props.item.id)}
            />
            <button
                className="todo-item__delete-button todo-list__delete-button"
                onClick={() => props.delete(props.item.id)}
            >
                X
            </button>
            <div
                className={`todo-item__text todo-list__text ${setClassNameIfDone()}`}
            >
                {props.item.text}
            </div>
        </div>
    );
}

export { TodoItem };
