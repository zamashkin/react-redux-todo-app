import { Form } from './Form';
import React, { Dispatch } from 'react';
import './index.css';
import { TodoList } from './TodoList';
import { ITodoItem } from './TodoItem';
import { connect } from 'react-redux';
import {
  Actions,
  setFilter,
  addTodoItem,
  changeIsActive,
  deleteTodoItem,
} from './actions';

export type FilterType = 'all' | 'active' | 'done';

export interface ITodoAppProps {
  filter: FilterType;
  toDoArray: ITodoItem[];
  dispatch: Dispatch<Actions>;
}
export interface ItodoAppState {
  currentText: string;
}

class TodoApp extends React.Component<ITodoAppProps, ItodoAppState> {
  private idCounter: number = -1;
  constructor(props: ITodoAppProps) {
    super(props);
    this.state = {
      currentText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.changeIsActive = this.changeIsActive.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  public render() {
    return (
      <div className="todo-app">
        <div className='todo-app__headline'>To Do List</div>
        <TodoList
          items={this.getFilteredItems()}
          changeIsActive={this.changeIsActive}
          delete={this.deleteTodoItem}
          filter={this.props.filter}
          className={'todo-app__list'}
        />
        <Form
          handleChange={this.handleChange}
          currentText={this.state.currentText}
          addToList={this.addToList}
          setFilter={this.setFilter}
          filter={this.props.filter}
          className={'todo-app__form'}
        />
      </div>
    );
  }

  private getFilteredItems() {
    const filteredItems = this.props.toDoArray.filter((item) => {
      return !(
        (this.props.filter === 'active' && !item.isActive) ||
        (this.props.filter === 'done' && item.isActive)
      );
    });
    return filteredItems;
  }

  private setFilter(filterName: FilterType) {
    this.props.dispatch(setFilter(filterName));
  }

  private idGenerator() {
    this.idCounter = this.idCounter + 1;
    return this.idCounter;
  }

  private deleteTodoItem(id: number) {
    this.props.dispatch(deleteTodoItem(id));
  }

  private changeIsActive(id: number) {
    this.props.dispatch(changeIsActive(id));
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      currentText: event.target.value,
    });
  }

  private addToList() {
    if (this.state.currentText.trim()) {
      const newObject = {
        id: this.idGenerator(),
        isActive: true,
        text: this.state.currentText.trim(),
      };
      this.props.dispatch(addTodoItem(newObject));
      this.setState({
        currentText: '',
      });
    }
  }
}

function mapStateToProps(state: any) {
  return {
    filter: state.filter,
    toDoArray: state.toDoArray,
  };
}

export default connect(mapStateToProps)(TodoApp);
