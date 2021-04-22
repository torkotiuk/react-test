import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import style from './Content.module.scss';

import Counter from '../Counter';
import Dropdown from '../Dropdown';
import Colorpicker from '../Colorpicker';
import colors from '../Colorpicker/colors.json';
import Todolist from '../Todolist';

import React, { Component } from 'react';

class Content extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn React', completed: false },
      { id: 'id-2', text: 'Find out about React Router', completed: true },
      { id: 'id-3', text: 'Alive Redux', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todos => todos.id !== todoId),
    }));
  };

  render() {
    const { pathname } = window.location;
    const { todos } = this.state;

    return (
      <div className={style.content}>
        {pathname === '/products' && <Products />}
        {pathname === '/contacts' && <Contacts />}
        {pathname === '/counter' && <Counter initialValue={10} />}
        {pathname === '/dropdown' && <Dropdown />}
        {pathname === '/colorpicker' && <Colorpicker options={colors} />}
        {pathname === '/todolist' && (
          <Todolist todos={todos} onDeleteTodo={this.deleteTodo} />
        )}
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
