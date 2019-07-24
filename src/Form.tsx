import React from 'react';
import { FilterType } from '.';

interface IFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentText: string;
  addToList(): void;
  setFilter(filterName: FilterType): void;
}

class Form extends React.Component<IFormProps, {}> {
  public render() {
    return (
      <form className='todo-form'>
        <input
          onChange={this.props.handleChange}
          value={this.props.currentText}
        />
        <button type='button' onClick={this.props.addToList}>
          Add
        </button>
        <button type='button' onClick={() => this.props.setFilter('all')}>
          Show all
        </button>
        <button type='button' onClick={() => this.props.setFilter('active')}>
          Show active
        </button>
        <button type='button' onClick={() => this.props.setFilter('done')}>
          Show done
        </button>
      </form>
    );
  }
}

export { Form };
