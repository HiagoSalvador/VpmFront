import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color);
`;

export const Logo = styled.div`
  img {
    width: 5rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 5%;
    margin-left: -1.875rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.625rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  width: 18.75rem;
  text-align: center;

  &:focus {
    text-align: left;
    border-color: var(--text-color); 
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: relative;
`;

export const NavItem = styled.div`
  margin-right: 1.25rem;
  position: relative;
`;

export const Button = styled.button<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor || 'var(--button-color)'};
  color: var(--secondary-color);

  img {
    margin-left: 0.625rem;
    width: 0.625rem;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.625rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--text-color);

  img {
    width: 30%;
    margin-right: 0.625rem;
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-color);
  }
`;
