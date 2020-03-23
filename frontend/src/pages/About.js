import React from 'react';

import { DivWrapper, DivList } from './style/About';

const About = () => {
  return (
    <DivWrapper>
      <h3>This is Todo-App</h3>
      <DivList>
        <p>For Tech Stack i'm using it:</p>
        <ol>
          <li>For FrontEnd ReactJS(React-Hook, Context-API)</li>
          <li>For BackEnd NodeJS(ExpressJS)</li>
          <li>For Database NoSQL(MongoDB)</li>
        </ol>
        <br />
        <hr />
        <br />
        <p>Flow This Program:</p>
        <ol>
          <li>Create todo after that refresh for load data</li>
          <li>Delete todo after that refresh for load data</li>
          <li>
            Click icon pencil for update todo(not showing todo).After update,
            refresh for load data from DB
          </li>
        </ol>
        <h3>
          This MERN Todo App far from perfect App, but step by step i'll fix it.
          THANKS!.
        </h3>
      </DivList>
    </DivWrapper>
  );
};

export default About;
