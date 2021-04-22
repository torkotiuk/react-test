import React from 'react';
import styles from './Todolist.module.scss';

const Todolist = ({ todos, onDeleteTodo }) => {
  const completedTodos = todos.filter(todo => todo.completed);
  console.log(completedTodos.length);

  return (
    <>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id} className={styles.TodoList__item}>
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
