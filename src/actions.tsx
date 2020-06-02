import { FilterType } from './TodoApp';
import { ITodoItem } from './TodoItem';

export enum ActionTypes {
    SET_FILTER = 'setFilter',
    ADD_TODO_ITEM = 'addTodoItem',
    CHANGE_IS_ACTIVE = 'changeIsActive',
    DELETE_TODO_ITEM = 'deleteTodoItem',
}

export type actions = SetFilterInterface
    | ChangeIsActiveInterface
    | AddTodoItemInterface
    | DeleteTodoItemInterface ;

interface SetFilterInterface {
    type: typeof ActionTypes.SET_FILTER;
    payload: {
        filter: FilterType;
    };
}

interface ChangeIsActiveInterface {
    type: typeof ActionTypes.CHANGE_IS_ACTIVE;
    payload: number;
}

interface AddTodoItemInterface {
    type: typeof ActionTypes.ADD_TODO_ITEM;
    payload: ITodoItem;
}

interface DeleteTodoItemInterface {
    type: typeof ActionTypes.DELETE_TODO_ITEM;
    payload: number;
}

export function setFilter(filter: FilterType): SetFilterInterface  {
    return {
        type: ActionTypes.SET_FILTER,
        payload: {
            filter,
        },
    };
}

export function changeIsActive(id: number): ChangeIsActiveInterface  {
    return {
        type: ActionTypes.CHANGE_IS_ACTIVE,
        payload: id,
    };
}

export function addTodoItem(item: ITodoItem): AddTodoItemInterface  {
    return {
        type: ActionTypes.ADD_TODO_ITEM,
        payload: item,
    };
}

export function deleteTodoItem(id: number): DeleteTodoItemInterface  {
    return {
        type: ActionTypes.DELETE_TODO_ITEM,
        payload: id,
    };
}
