import React from 'react';
import { FilterType } from './TodoApp';

interface IFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentText: string;
  addToList(): void;
  setFilter(filterName: FilterType): void;
  filter: FilterType;
}

class Form extends React.Component<IFormProps, {}> {
  public render() {
    return (
      <form className="form todo-app__form">
        <input
          className="form__text-input"
          onChange={this.props.handleChange}
          value={this.props.currentText}
        />
        <button
          className="form__add-button"
          type="button"
          onClick={this.props.addToList}
        >
          Add
        </button>
        <button
          className={`form__filter-all-button${
            this.props.filter === 'all' ? ' active' : ''
          }`}
          type="button"
          onClick={() => this.props.setFilter('all')}
        >
          All
        </button>
        <button
          className={`form__filter-active-button${
            this.props.filter === 'active' ? ' active' : ''
          }`}
          type="button"
          onClick={() => this.props.setFilter('active')}
        >
          Active
        </button>
        <button
          className={`form__filter-done-button${
            this.props.filter === 'done' ? ' active' : ''
          }`}
          type="button"
          onClick={() => this.props.setFilter('done')}
        >
          Done
        </button>
      </form>
    );
  }
}

export { Form };
