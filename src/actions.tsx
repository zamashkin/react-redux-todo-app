import { FilterType } from './TodoApp';
import { ITodoItem } from './TodoItem';

export enum ActionTypes {
  SET_FILTER = 'setFilter',
  ADD_TODO_ITEM = 'addTodoItem',
  CHANGE_IS_ACTIVE = 'changeIsActive',
  DELETE_TODO_ITEM = 'deleteTodoItem'
}

export type actions = setFilter |  changeIsActive | addTodoItem | deleteTodoItem;

interface setFilter {
  type: typeof ActionTypes.SET_FILTER;
  payload: {
    filter: FilterType;
  };
}

interface changeIsActive {
  type: typeof ActionTypes.CHANGE_IS_ACTIVE;
  payload: number;
}

interface addTodoItem {
  type: typeof ActionTypes.ADD_TODO_ITEM;
  payload: ITodoItem;
}

interface deleteTodoItem {
  type: typeof ActionTypes.DELETE_TODO_ITEM;
  payload: number;
}

export function setFilter(filter: FilterType): setFilter {
  return {
    type: ActionTypes.SET_FILTER,
    payload: {
      filter,
    },
  };
}

export function changeIsActive(id: number):changeIsActive {
  return {
    type: ActionTypes.CHANGE_IS_ACTIVE,
    payload: id,
  };
}

export function addTodoItem(item: ITodoItem): addTodoItem {
  return {
    type: ActionTypes.ADD_TODO_ITEM,
    payload: item,
  };
}

export function deleteTodoItem(id : number):deleteTodoItem {
  return {
    type: ActionTypes.DELETE_TODO_ITEM,
    payload: id,
  }
}
