import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 2px solid var(--light-blue-color); 
  border-radius: 5px;
  width: 60%;
  height: 22.5rem;
  margin-top: 200px;
  margin-left: 100px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-origin: center bottom;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    margin-left: 10px;
  }

  h3 {
    color: var(--text-color);
    margin-bottom: 5px;
  }

  p {
    color: var(--text-color);
    margin-bottom: 15px;
  }

  button {
    background-color: var(--button-hover-color); 
    color: var(--secondary-color);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;