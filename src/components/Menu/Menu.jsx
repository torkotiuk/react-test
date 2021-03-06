import style from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={style.menu}>
      <p>Menu</p>
      <a href="/products">Products</a>
      <a href="/products/id-1">Product Details</a>
      <a href="/cart">Cart</a>
      <a href="/order">Order</a>
      <a href="/profile">Profile</a>
      <a href="/counter">Counter</a>
      <a href="/dropdown">Dropdown menu</a>
      <a href="/colorpicker">Color picker</a>
      <a href="/todolist">Todo List</a>
      <a href="/todoeditor">Todo Editor</a>
      <a href="/form">Form (get data)</a>
      <a href="/todosG">Todos Gerry</a>
      <a href="/phonebook">Phonebook</a>
      <a href="/feedback">Feedback</a>
      <a href="/clockcomp">Clockcomp</a>
      <a href="/contacts">Contacts</a>
    </div>
  );
};

export default Menu;
