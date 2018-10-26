import React from 'react';

const Todo = ({todo, deleteTodo}) => (
  <li>
    {todo}
    <button type="button" onClick={deleteTodo}>x</button>
  </li>);

export default Todo;
