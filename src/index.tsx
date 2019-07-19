import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {TodoList} from './todoList';

export interface ItodoItemObject {
  id: number;
  text: string;
  isActive: boolean;
}

interface ItodoAppState {
  currentText: string;
  filter: string;
  toDoArray: ItodoItemObject[];
}

interface ItodoItem {
  item: ItodoItemObject;
  changeIsActive: (id:number) => void;
  delete: (id:number) => void;
}

class TodoApp extends React.Component<{}, ItodoAppState> {
  private idCounter:number = -1;
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
          items={this.state.toDoArray}
          changeIsActive={this.changeIsActive}
          delete={this.deleteTodoItem}
          filter={this.state.filter}
        />
        <form className="todo-form">
          <input onChange={this.handleChange} value={this.state.currentText} />
          <button type="button" onClick={this.addToList}>
            Add
          </button>
          <button type="button" onClick={() => this.setFilter('all')}>
            Show all
          </button>
          <button type="button" onClick={() => this.setFilter('active')}>
            Show active
          </button>
          <button type="button" onClick={() => this.setFilter('done')}>
            Show done
          </button>
        </form>
      </div>
    );
  }

  private setFilter(filterName:string) {
    this.setState({
      filter: filterName,
    });
  }

  private idGenerator() {
    const idCounterOld = this.idCounter;
    this.idCounter = idCounterOld + 1;
    return this.idCounter;
  }

  private deleteTodoItem(id:number) {
    let deleteItemIndex:number;
    const newArray = this.state.toDoArray.slice();
    for (let i = 0; i < this.state.toDoArray.length; i++) {
      if (this.state.toDoArray[i].id === id) {
        deleteItemIndex = i;
        newArray.splice(deleteItemIndex, 1);
      }
    }
    this.setState({
      toDoArray: newArray,
    });
  }

  private changeIsActive(id:number) {
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

  private handleChange(event:any) {
    this.setState({
      currentText: event.target.value,
    });
  }

  private addToList() {
    const lastArray = this.state.toDoArray.slice();
    lastArray.push({
      id: this.idGenerator(),
      isActive: true,
      text: this.state.currentText,
    });
    this.setState({
      currentText: '',
      toDoArray: lastArray,
    });
  }
}

function TodoItem(props:ItodoItem) {
  return (
    <div>
      <button
        className="doneButton"
        onClick={() => props.changeIsActive(props.item.id)}
      >
        Done
      </button>
      <button
        className="deleteButton"
        onClick={() => props.delete(props.item.id)}
      >
        X
      </button>
      <div className={`todoItem ${props.item.isActive}`}>{props.item.text}</div>
    </div>
  );
}

ReactDom.render(<TodoApp />, document.getElementById('root'));
export { TodoItem };
