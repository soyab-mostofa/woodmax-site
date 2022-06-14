import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart, BsPerson } from 'react-icons/bs';
import { Items, Logo, Menu, NavContainer } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <Menu>
        <AiOutlineMenu />
      </Menu>
      <Logo>woodmax</Logo>
      <Items>
        <BsPerson />
        <BsCart />
      </Items>
    </NavContainer>
  );
};

export default Navbar;
