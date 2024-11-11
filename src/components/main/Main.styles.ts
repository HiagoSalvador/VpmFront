import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid var(--color-blue-lightest); 
  border-radius: 5px;
  width: 50%;
  height: 20rem;
  margin: 200px 0 0 50px; 

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-origin: center bottom;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    margin: 0 10px;
  }

  h3 {
    font-family: var(--font-montserrat);
    font-weight: 500;
    color: var(--color-black);
    margin-bottom: 5px;
  }

  p {
    font-family: var(--font-roboto);
    font-weight: 600;
    color: var(--color-black);
    margin: 15px 0;
  }

  button {
    font-family: var(--font-roboto);
    background-color: var(--color-blue-hover); 
    color: var(--color-white);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
