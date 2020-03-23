import React, { lazy, Suspense, useContext, useState, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Layout from '../src/layout/Layout';
import Spinner from './spinner/Spinner';

import TodosContext from './context/TodosContext';
import TodosReducer from './context/TodosReducer';

import { GlobalStyle } from './globalStyle/GlobalStyle';

import PrivateRoute from './privateRoute/PrivateRoute';
import { AuthContext } from './context/auth/AuthContext';

const Home = lazy(() => {
  return import('./pages/Home');
});

const Todo = lazy(() => {
  return import('./pages/Todo');
});

const About = lazy(() => {
  return import('./pages/About');
});

const Login = lazy(() => {
  return import('./pages/Login');
});

const Register = lazy(() => {
  return import('./pages/Register');
});

const App = () => {
  const [getToken, setGetToken] = useState();

  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  const setAuthToken = loadData => {
    localStorage.setItem('token', JSON.stringify(loadData));
    setGetToken(loadData);
  };

  return (
    <>
      <AuthContext.Provider value={{ getToken, setGetToken: setAuthToken }}>
        <TodosContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <Router>
            <GlobalStyle />
            <Layout>
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                <Switch>
                  <PrivateRoute Route exact path="/" component={Home} />
                  <PrivateRoute Route path="/todo" component={Todo} />
                  <PrivateRoute Route path="/about" component={About} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Redirect to="/login" />
                </Switch>
              </Suspense>
            </Layout>
          </Router>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
