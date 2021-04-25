import React from 'react';
import styles from './Todolist.module.scss';
import classnames from 'classnames';

const Todolist = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  const completedTodos = todos.filter(todo => todo.completed);

  const { TodoList__item, TodoList__item_completed } = styles;

  return (
    <>
      <ul>
        {todos.map(({ id, text, completed }) => (
          // <li key={id} className={styles.TodoList__item}>
          <li
            key={id}
            className={classnames(TodoList__item, {
              [TodoList__item_completed]: completed,
            })}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p className={styles.TodoList__text}>{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Common tasks amount: {todos.length}</p>
        <p>Amount of done tasks: {completedTodos.length}</p>
      </div>
    </>
  );
};

export default Todolist;
