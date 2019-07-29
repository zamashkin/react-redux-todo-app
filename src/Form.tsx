import React from 'react';
import { FilterType } from './TodoApp';

interface IFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentText: string;
  addToList(): void;
  setFilter(filterName: FilterType): void;
  filter: FilterType;
  className?: string;
}

class Form extends React.Component<IFormProps, {}> {
  public render() {
    return (
      <form
        onSubmit={e => e.preventDefault()}
        className={`form ${this.props.className}`}
      >
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
          className={`form__filter-button${
            this.props.filter === 'all' ? ' form__filter-button_active' : ''
          }`}
          type="button"
          onClick={() => this.props.setFilter('all')}
        >
          All
        </button>
        <button
          className={`form__filter-button${
            this.props.filter === 'active' ? ' form__filter-button_active' : ''
          }`}
          type="button"
          onClick={() => this.props.setFilter('active')}
        >
          Active
        </button>
        <button
          className={`form__filter-button${
            this.props.filter === 'done' ? ' form__filter-button_active' : ''
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
