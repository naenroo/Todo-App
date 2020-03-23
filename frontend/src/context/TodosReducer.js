const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        listTodos: action.payload
      };
    case 'ADD_TODO':
      const addTodo = [...state.listTodos, action.payload];
      return {
        ...state,
        listTodos: addTodo
      };

    case 'TOGGLE_COMPLETE':
      const toggleTodo = state.listTodos.map(item =>
        item.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : item
      );

      return {
        ...state,
        listTodos: toggleTodo
      };

    case 'DELETE_TODO':
      const removeTodo = state.listTodos.filter(
        todo => todo.id !== action.payload.id
      );
      const removeItem =
        state.updateItemTodo.id === action.payload.id
          ? {}
          : state.updateItemTodo;
      return {
        ...state,
        updateItemTodo: removeItem,
        listTodos: removeTodo
      };

    case 'UPDATE_TODO':
      const updateItemIndex = state.listTodos.findIndex(
        item => item.id === state.updateItemTodo.id
      );
      const updateItem = { ...action.payload };
      const updatedIndex = [
        ...state.listTodos.slice(0, updateItemIndex),
        updateItem,
        ...state.listTodos.slice(updateItemIndex + 1)
      ];
      return {
        ...state,
        updateItemTodo: {},
        listTodos: updatedIndex
      };

    case 'UPDATE_TODO_ITEM':
      return {
        ...state,
        updateItemTodo: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
