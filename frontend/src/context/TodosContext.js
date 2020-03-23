import { createContext } from 'react';

const TodosContext = createContext({
  listTodos: [],
  updateItemTodo: {}
});

export default TodosContext;
