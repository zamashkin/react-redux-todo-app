import { Form } from './Form';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { TodoList } from './TodoList';
import { ITodoItem } from './TodoItem';

export type FilterType = 'all' | 'active' | 'done';

export interface ItodoAppState {
  currentText: string;
  filter: FilterType;
  toDoArray: ITodoItem[];
}

class TodoApp extends React.Component<{}, ItodoAppState> {
  private idCounter: number = -1;
  constructor(props: object) {
    super(props);
    this.state = {
      currentText: '',
      filter: 'all',
      toDoArray: [],
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
        <h2>To Do List</h2>
        <TodoList
          items={this.getFilteredItems()}
          changeIsActive={this.changeIsActive}
          delete={this.deleteTodoItem}
          filter={this.state.filter}
        />
        <Form
          handleChange={this.handleChange}
          currentText={this.state.currentText}
          addToList={this.addToList}
          setFilter={this.setFilter}
        />
      </div>
    );
  }

  private getFilteredItems() {
    const filteredItems = this.state.toDoArray.filter((item) => {
      return !(
        (this.state.filter === 'active' && !item.isActive) ||
        (this.state.filter === 'done' && item.isActive)
      );
    });
    return filteredItems;
  }

  private setFilter(filterName: FilterType) {
    this.setState({
      filter: filterName,
    });
  }

  private idGenerator() {
    this.idCounter = this.idCounter + 1;
    return this.idCounter;
  }

  private deleteTodoItem(id: number) {
    const newArray = this.state.toDoArray.filter((item) => item.id !== id);
    this.setState({
      toDoArray: newArray,  
    });
  }

  private changeIsActive(id: number) {
    const newArray = this.state.toDoArray.map((item) => {
      if (item.id === id) {
        item.isActive = !item.isActive;
      }
      return item;
    });
    this.setState({
      toDoArray: newArray,
    });
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      currentText: event.target.value,
    });
  }

  private addToList() {
    if (this.state.currentText.trim()) {
      const newArray = [
        ...this.state.toDoArray,
        {
          id: this.idGenerator(),
          isActive: true,
          text: this.state.currentText.trim(),
        },
      ];
      this.setState({
        currentText: '',
        toDoArray: newArray,
      });
    }
  }
}

ReactDom.render(<TodoApp />, document.getElementById('root'));
