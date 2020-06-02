import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    (
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ),
    document.getElementById('root'),
);
