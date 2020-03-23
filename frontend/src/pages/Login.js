import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../components/form/Input';
import ButtonSubmit from '../components/form/Button';

import { useAuth } from '../context/auth/AuthContext';

import ModalPortal from '../components/modalPortal/Modal';

import { H1 } from './style/Home';

import {
  MainDivForm,
  DivForm,
  DivModalInfo,
  H1Modal,
  SpanModal
} from './style/Login';
import { ModalToggleContainer } from '../components/modalPortal/style/ModalToggleStyle';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setToken } = useAuth();

  const history = useHistory();

  const handleSubmitLogin = event => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_USER_LOGIN, {
        email,
        password
      })
      .then(result => {
        if (result.status === 200) {
          setToken(result.data);
          setLoggedIn(true);
        } else {
          setError(true);
        }
      })
      .catch(error => {
        setError(true);
      });
  };

  if (loggedIn) {
    return history.push('/todo');
  }

  return (
    <>
      <div>
        <H1>Login</H1>
        <form onSubmit={handleSubmitLogin}>
          <MainDivForm>
            <DivForm>
              <div>
                <Input
                  title="Email"
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="input your email"
                />
              </div>
              <div>
                <Input
                  title="Password"
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  placeholder="input your password"
                />
              </div>
              <ButtonSubmit type="submit" name="Login" />
            </DivForm>
          </MainDivForm>
        </form>
        {error && (
          <ModalPortal>
            <ModalToggleContainer>
              <DivModalInfo>
                <H1Modal>Your Password or Email is wrong</H1Modal>
                <h4>You can choose:</h4>
                Back to Home. Click
                <SpanModal>
                  <Link to="/">Home</Link>
                </SpanModal>
                , or if you don't have an account just Click:
                <SpanModal>
                  <Link to="/register">Register</Link>
                </SpanModal>
              </DivModalInfo>
            </ModalToggleContainer>
          </ModalPortal>
        )}
      </div>
    </>
  );
};

export default Login;
