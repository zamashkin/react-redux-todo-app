import { FilterType } from './TodoApp';
import { ITodoItem } from './TodoItem';

export enum ActionTypes {
  SET_FILTER = 'setFilter',
  ADD_TODO_ITEM = 'addTodoItem',
  CHANGE_IS_ACTIVE = 'changeIsActive',
  DELETE_TODO_ITEM = 'deleteTodoItem',
}

export type Actions = SetFilter | ChangeIsActive | AddTodoItem | DeleteTodoItem;

interface SetFilter {
  type: typeof ActionTypes.SET_FILTER;
  payload: {
    filter: FilterType;
  };
}

interface ChangeIsActive {
  type: typeof ActionTypes.CHANGE_IS_ACTIVE;
  payload: { id: number };
}

interface AddTodoItem {
  type: typeof ActionTypes.ADD_TODO_ITEM;
  payload: ITodoItem;
}

interface DeleteTodoItem {
  type: typeof ActionTypes.DELETE_TODO_ITEM;
  payload: { id: number };
}

export function setFilter(filter: FilterType): SetFilter {
  return {
    type: ActionTypes.SET_FILTER,
    payload: {
      filter,
    },
  };
}

export function changeIsActive(id: number): ChangeIsActive {
  return {
    type: ActionTypes.CHANGE_IS_ACTIVE,
    payload: { id },
  };
}

export function addTodoItem(item: ITodoItem): AddTodoItem {
  return {
    type: ActionTypes.ADD_TODO_ITEM,
    payload: item,
  };
}

export function deleteTodoItem(id: number): DeleteTodoItem {
  return {
    type: ActionTypes.DELETE_TODO_ITEM,
    payload: { id },
  };
}
