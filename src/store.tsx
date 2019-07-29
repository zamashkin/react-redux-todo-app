import { createStore } from 'redux';
import { ITodoItem } from './TodoItem';
import { FilterType } from './TodoApp';
import { Actions, ActionTypes } from './actions';

export interface IStore {
  filter: FilterType;
  toDoArray: ITodoItem[];
}

const initialState: IStore = {
  filter: 'all',
  toDoArray: [],
};

function reducer(state: IStore = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case ActionTypes.CHANGE_IS_ACTIVE:
      const newArray = state.toDoArray.map((item) => {
        if (item.id === action.payload.id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
      return {
        ...state,
        toDoArray: newArray,
      };
    case ActionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        toDoArray: [...state.toDoArray, action.payload],
      };
    case ActionTypes.DELETE_TODO_ITEM:
      const newArrayWithDeleted = state.toDoArray.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        toDoArray: newArrayWithDeleted,
      };
    default:
      return initialState;
  }
}

const store = createStore(reducer);

export default store;
