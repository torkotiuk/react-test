import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import style from './Content.module.scss';

import Counter from '../Counter';
import Dropdown from '../Dropdown';
import Colorpicker from '../Colorpicker';
import colors from '../Colorpicker/colors.json';
import Todolist from '../Todolist';
import TodoEditor from '../TodoEditor';
import Filter from '../Filter';
import Form from '../Form';
import TodosG from '../pages/TodosG';
import Phonebook from '../Phonebook/App';

import React, { Component } from 'react';
import shortid from 'shortid';

class Content extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn React', completed: false },
      { id: 'id-2', text: 'Find out about React Router', completed: true },
      { id: 'id-3', text: 'Alive Redux', completed: false },
    ],
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todos => todos.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { pathname } = window.location;
    const { todos, filter } = this.state;

    const normalizedForFilter = this.state.filter.toLowerCase();

    const visibleTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedForFilter),
    );

    return (
      <div className={style.content}>
        {pathname === '/products' && <Products />}
        {pathname === '/contacts' && <Contacts />}
        {pathname === '/counter' && <Counter initialValue={10} />}
        {pathname === '/dropdown' && <Dropdown />}
        {pathname === '/colorpicker' && <Colorpicker options={colors} />}
        {pathname === '/todolist' && (
          <>
            <TodoEditor onSubmit={this.addTodo} />
            <br />
            <br />
            <Filter value={filter} onChange={this.changeFilter} />

            <Todolist
              todos={visibleTodos}
              // todos={todos}
              onDeleteTodo={this.deleteTodo}
              onToggleCompleted={this.toggleCompleted}
            />
          </>
        )}
        {pathname === '/todoeditor' && <TodoEditor onSubmit={this.addTodo} />}

        {pathname === '/form' && <Form onSubmit={this.formSubmitHandler} />}
        {pathname === '/todosG' && <TodosG />}
        {pathname === '/phonebook' && <Phonebook />}
      </div>
    );
  }
}

export default Content;

// const Content = () => {
//   const { pathname } = window.location;

//   return (
//     <div className={style.content}>
//       {pathname === '/products' && <Products />}
//       {pathname === '/contacts' && <Contacts />}
//       {pathname === '/counter' && <Counter initialValue={10} />}
//       {pathname === '/dropdown' && <Dropdown />}
//       {pathname === '/colorpicker' && <ColorPicker options={colors} />}
//       {pathname === '/todolist' && <Todolist />}
//     </div>
//   );
// };
// export default Content;
