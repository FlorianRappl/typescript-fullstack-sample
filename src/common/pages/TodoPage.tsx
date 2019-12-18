import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useGlobalState, actions } from '../state';

export const AddTodo: React.FC = () => {
  const [message, setMessage] = React.useState('');
  return (
    <form
      onSubmit={e => {
        actions.addTodo({ id: Math.random().toString(36), done: false, message });
        setMessage('');
        e.preventDefault();
      }}>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

const AvailableTodos: React.FC = () => {
  const [todos] = useGlobalState('todos');
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} readOnly /> {todo.message}
        </li>
      ))}
    </ul>
  );
};

export const TodoPage: React.FC<RouteComponentProps> = () => (
  <>
    <h1>ToDos</h1>
    <AvailableTodos />
    <AddTodo />
  </>
);
