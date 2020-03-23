import React from 'react';
import { NavLink } from 'react-router-dom';
import PrivateRoute from '../privateRoute/PrivateRoute';

import { HeaderWrapper, MenuList, ListWrapper } from '../layout/style/Header';

const Header = () => {
  const linkPrivate = PrivateRoute ? (
    <HeaderWrapper>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/login">
            Login
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/register">
            Register
          </NavLink>
        </ListWrapper>
      </MenuList>
    </HeaderWrapper>
  ) : (
    <HeaderWrapper>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            Home
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/todo">
            Todo
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/about">
            About
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/logout">
            Logout
          </NavLink>
        </ListWrapper>
      </MenuList>
    </HeaderWrapper>
  );

  return <>{linkPrivate}</>;
};

export default Header;
