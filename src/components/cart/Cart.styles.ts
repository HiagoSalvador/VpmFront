import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

`;

export const CartHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 5px;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

export const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 5px 0;
    padding: 5px 10px;
    background-color: var(--color-blue-primary);
    color: var(--color-white);
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-blue-accent);
    }
  }
`;

export const Total = styled.div`
  text-align: right;
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--green);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: #888;
  margin-top: 50px;
`;
