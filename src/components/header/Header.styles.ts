import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-bottom: 1px solid var(--color-grey-neutral);
  font-family: var(--font-roboto); 
`;

export const Logo = styled.div`
  img {
    width: 5rem;
  }
  font-family: var(--font-roboto); 
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-roboto);

  img {
    width: 5%;
    margin-left: -1.875rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.625rem;
  border: 1px solid var(--color-grey-neutral);
  border-radius: 0.25rem;
  width: 18.75rem;
  text-align: center;
  font-family: var(--font-roboto); 
  font-weight: 600;
  font-size: 14px;

  &:focus {
    text-align: left;
    border-color: var(--color-black); 
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: relative;
  font-family: var(--font-roboto); 
`;

export const NavItem = styled.div`
  margin-right: 1.25rem;
  position: relative;
  font-family: var(--font-roboto); 
`;

export const Button = styled.button<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor || 'var(--color-blue-custom)'};
  color: var(--color-white);
  font-family: var(--font-roboto); 
  font-weight: 900;

  img {
    margin: 1.5px 0 0 0.5rem;
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
  color: var(--color-black);
  font-family: var(--font-roboto); 

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
  border: 1px solid var(--color-grey-neutral);
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-family: var(--font-roboto);
`;

export const DropdownItem = styled.div`
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-roboto); 
  color: var(--color-black);

  &:hover {
    background-color: var(--color-grey-hover);
  }
`;
