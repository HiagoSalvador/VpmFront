import React, { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  SearchBar,
  SearchInput,
  Nav,
  NavItem,
  Button,
  CartButton,
  DropdownMenu,
  DropdownItem,
} from './styles';

import Carrinho from './images/carrinho.png';
import Opcoes from './images/opcoes.png';
import Lupa from './images/lupa.png';
import LogoImg from './images/logo.png';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (isOpen: boolean) => {
    setDropdownOpen(isOpen);
  };

  const handleCartClick = () => {
    console.log('Cart opened');
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={LogoImg} alt="Logo da V.P.M Limp" />
      </Logo>
      <SearchBar>
        <SearchInput type="text" placeholder="O que você está procurando?" />
        <img src={Lupa} alt="Icone de pesquisa" />
      </SearchBar>
      <Nav>
        <NavItem
          onMouseEnter={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
        >
          <Button $bgColor="#ADD8E6">
            Produtos
            <img src={Opcoes} alt="Icone de opções" />
          </Button>
          <DropdownMenu $isOpen={isDropdownOpen} aria-expanded={isDropdownOpen}>
            <DropdownItem>Produto 1</DropdownItem>
            <DropdownItem>Produto 2</DropdownItem>
            <DropdownItem>Produto 3</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <Button $bgColor="#3498DB">Entrar</Button>
        </NavItem>
        <NavItem>
          <Button $bgColor="#007BFF">Cadastrar</Button>
        </NavItem>
      </Nav>
      <CartButton onClick={handleCartClick}>
        <img src={Carrinho} alt="Icone do carrinho de compras" />
        Carrinho
      </CartButton>
    </HeaderContainer>
  );
}

export default Header;
