import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
} from './Header.styles';

import Carrinho from './images/carrinho.png';
import Opcoes from './images/opcoes.png';
import Lupa from './images/lupa.png';
import LogoImg from './images/logo.png';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <img src={LogoImg} alt="Logo da V.P.M Limp" />
        </Logo>
      </Link>
      <SearchBar>
        <SearchInput type="text" placeholder="O que você está procurando?" />
        <img src={Lupa} alt="Ícone de pesquisa" />
      </SearchBar>
      <Nav>
        <NavItem
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Button $bgColor="#5DADE2">
            Produtos
            <img src={Opcoes} alt="Ícone de opções" />
          </Button>
          <DropdownMenu $isOpen={isDropdownOpen} aria-expanded={isDropdownOpen}>
            <DropdownItem onClick={() => navigate('/casa')}>Casa</DropdownItem>
            <DropdownItem onClick={() => navigate('/construcao')}>Construção</DropdownItem>
            <DropdownItem>Automotivo</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <Button $bgColor="#3498DB" onClick={() => navigate('/login')}>Entrar</Button>
        </NavItem>
        <NavItem>
          <Button $bgColor="#007BFF" onClick={() => navigate('/signup')}>Cadastrar</Button>
        </NavItem>
      </Nav>
      <CartButton onClick={() => navigate('/cart')}>
      <img src={Carrinho} alt="Ícone do carrinho de compras" />
       Carrinho
      </CartButton>
    </HeaderContainer>
  );
}

export default Header;
