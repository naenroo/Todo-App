import React, { useState } from 'react';

import Input from '../components/form/Input';
import ButtonSubmit from '../components/form/Button';

import { H1 } from './style/Home';
import { MainDivForm, DivForm } from './style/Login';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitRegister = event => {
    event.preventDefault();

    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <H1>Register</H1>
      <form onSubmit={handleSubmitRegister}>
        <MainDivForm>
          <DivForm>
            <div>
              <Input
                title="Name"
                placeholder="your full name"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div>
              <Input
                title="Email"
                placeholder="your email"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div>
              <Input
                title="Password"
                type="password"
                placeholder="input your password"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div>
              <Input
                title="Password"
                type="password"
                placeholder="confirm your password"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <ButtonSubmit type="submit" name="Register" />
          </DivForm>
        </MainDivForm>
      </form>
    </>
  );
};

export default Register;
