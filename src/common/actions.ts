import { Todo, GlobalState } from './types';

export function addTodo(state: GlobalState, todo: Todo): GlobalState {
  return {
    ...state,
    todos: [...state.todos, todo],
  };
}

export function removeTodo(state: GlobalState, todo: Todo): GlobalState {
  return {
    ...state,
    todos: state.todos.filter(m => m.id !== todo.id),
  };
}

export function updateTodo(state: GlobalState, todo: Todo): GlobalState {
  return {
    ...state,
    todos: state.todos.map(m => (m.id === todo.id ? todo : m)),
  };
}
