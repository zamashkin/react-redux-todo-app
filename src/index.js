import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoArray: [],
            currentText: '',
            filter: 'all'
        };
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
        this.changeIsActive = this.changeIsActive.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    render() {
        return (
            <div className='todo-app'>
                <h2>To Do List</h2>
                <TodoList items={this.state.toDoArray} changeIsActive={this.changeIsActive} delete={this.deleteTodoItem} filter={this.state.filter} />
                <form className='todo-form'>
                    <input
                        onChange={this.handleChange}
                        value={this.state.currentText}
                    />
                    <button type='button' onClick={this.addToList}> Add </button>
                    <button type='button' onClick={() => this.setFilter('all')}>Show all</button>
                    <button type='button' onClick={() => this.setFilter('active')}>Show active</button>
                    <button type='button' onClick={() => this.setFilter('done')}>Show done</button>
                </form>
            </div>
        )
    }

    setFilter(filterName) {
        this.setState({
            filter: filterName
        })
    }

    idCounter = -1;
    idGenerator() {
        this.idCounter++
        return this.idCounter
    }

    deleteTodoItem(id) {
        let deleteItemIndex;
        let newArray = this.state.toDoArray.slice()
        for (let i = 0; i < this.state.toDoArray.length; i++) {
            if (this.state.toDoArray[i].id === id) {
                deleteItemIndex = i;
            }
        }
        newArray.splice(deleteItemIndex, 1)
        this.setState({
            toDoArray: newArray
        })
    }

    changeIsActive(id) {
        let newArray = this.state.toDoArray.map(function (todoItem) {
            if (todoItem.id === id) {
                if (todoItem.isActive) {
                    todoItem.isActive = false;
                } else {
                    todoItem.isActive = true;
                }
            }
            return todoItem;
        })
        this.setState({
            toDoArray: newArray
        })
    }

    handleChange(event) {
        this.setState({
            currentText: event.target.value
        })
    }

    addToList() {
        let lastArray = this.state.toDoArray.slice();
        lastArray.push({
            text: this.state.currentText,
            isActive: true,
            id: this.idGenerator(),
        });
        this.setState({
            toDoArray: lastArray,
            currentText: '',
        })
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className='todoList'>
                {this.props.items.map((item) => {
                    if (this.props.filter === 'active' && item.isActive === false) { return null }
                    else if (this.props.filter === 'done' && item.isActive === true) { return null }
                    else {
                        return <TodoItem item={item} changeIsActive={this.props.changeIsActive} delete={this.props.delete} />
                    }
                }
                )}
            </div>
        )
    }
}

function TodoItem(props) {
    return (
        <div>
            <button className='doneButton' onClick={() => props.changeIsActive(props.item.id)}>Done</button>
            <button className='deleteButton' onClick={() => props.delete(props.item.id)}>X</button>
            <div className={`todoItem ${props.item.isActive}`}>{props.item.text}</div>
        </div>
    )
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);