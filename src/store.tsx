import { createStore } from 'redux';
import { ITodoItem } from './TodoItem';
import { FilterType } from './TodoApp';
import { actions, ActionTypes } from './actions';

export interface IStore {
  filter: FilterType;
  toDoArray: ITodoItem[];
}

const initialState: IStore = {
  filter: 'all',
  toDoArray: [],
};

function reducer(state: IStore = initialState, action: actions) {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return {
        filter: action.payload.filter,
        toDoArray: state.toDoArray,
      };
    case ActionTypes.CHANGE_IS_ACTIVE:
      const newArray = state.toDoArray.map((item) => {
        if (item.id === action.payload) {
          item.isActive = !item.isActive;
        }
        return item;
      });
      return {
        filter: state.filter,
        toDoArray: newArray,
      };
    case ActionTypes.ADD_TODO_ITEM:
      return {
        filter: state.filter,
        toDoArray: [...state.toDoArray, action.payload],
      };
    case ActionTypes.DELETE_TODO_ITEM:
      const newArrayWithDeleted = state.toDoArray.filter(
        (item) => item.id !== action.payload,
      );
      return {
        filter: state.filter,
        toDoArray: newArrayWithDeleted,
      };
    default:
      return initialState;
  }
}

const store = createStore(reducer);

export default store;
