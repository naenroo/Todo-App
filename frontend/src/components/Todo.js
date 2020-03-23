import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAPI } from '../API/useApi';
import { searchingFor } from '../utils/SearchFilter';

import {
  Div,
  FormContainer,
  DivSearch,
  InputSearch,
  Li,
  SpanLi,
  SpanUpdate,
  SpanDelete,
  InputText,
  Input
} from './style/Todo';

import TodosContext from '../context/TodosContext';

const Todo = () => {
  const [addTodo, setAddTodo] = useState('');
  const [search, setSearch] = useState('');
  const [toggleSearch, setToggleSearch] = useState(false);

  const { state } = useContext(TodosContext);
  const {
    state: { updateItemTodo = {} },
    dispatch
  } = useContext(TodosContext);

  const fetchTodos = useAPI(process.env.REACT_APP_TODOS);

  useEffect(() => {
    dispatch({
      type: 'FETCH_TODOS',
      payload: fetchTodos
    });

    // eslint-disable-next-line
  }, [fetchTodos]);

  useEffect(() => {
    if (updateItemTodo.text) {
      setAddTodo(updateItemTodo.text);
    } else {
      setAddTodo('');
    }

    // eslint-disable-next-line
  }, [updateItemTodo.id]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (updateItemTodo.text) {
      const response = await axios.patch(
        process.env.REACT_APP_UPDATE_TODO + updateItemTodo._id,
        {
          text: addTodo
        }
      );
      dispatch({
        type: 'UPDATE_TODO',
        payload: response.data
      });
      window.location.reload(false);
    } else {
      const response = await axios.post(process.env.REACT_APP_ADD_TODO, {
        text: addTodo,
        complete: false
      });
      window.location.reload(false);
      dispatch({
        type: 'ADD_TODO',
        payload: response.data
      });
    }
    setAddTodo('');
  };

  const toggleSearchHeandler = () => {
    setToggleSearch(prevToggleSearch => !prevToggleSearch);
  };

  const handleFilter = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Div>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <DivSearch onClick={toggleSearchHeandler}>Search</DivSearch>
            {toggleSearch && (
              <div>
                <InputSearch
                  type="text"
                  value={search}
                  onChange={handleFilter}
                  placeholder="Search Todo..."
                />
              </div>
            )}
            <ul>
              {state.listTodos.filter(searchingFor(search)).map(todo => (
                <Li key={todo._id}>
                  <SpanLi
                    onClick={() =>
                      dispatch({
                        type: 'TOGGLE_COMPLETE',
                        payload: todo
                      })
                    }
                    complete={todo.complete}
                  >
                    {todo.text}
                  </SpanLi>
                  <SpanUpdate
                    onClick={() => {
                      dispatch({
                        type: 'UPDATE_TODO_ITEM',
                        payload: todo
                      });
                    }}
                  >
                    <span role="img" aria-label="">
                      ✏️
                    </span>
                  </SpanUpdate>
                  <SpanDelete
                    onClick={async () => {
                      dispatch({
                        type: 'DELETE_TODO',
                        payload: todo
                      });
                      await axios.delete(
                        process.env.REACT_APP_DELETE_TODO + todo._id
                      );
                      window.location.reload(false);
                    }}
                  >
                    <span role="img" aria-label="">
                      🗑️
                    </span>
                  </SpanDelete>
                </Li>
              ))}
            </ul>
            <InputText
              type="text"
              onChange={event => setAddTodo(event.target.value)}
              value={addTodo}
              placeholder="I want to...."
            />
            <div>
              <Input
                type="submit"
                value="Add Todo"
                disabled={addTodo.length === 0}
              />
            </div>
          </form>
        </FormContainer>
      </Div>
    </>
  );
};

export default Todo;
