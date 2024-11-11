import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-poppins);
  margin: 50px 0;
`;

export const SignUpForm = styled.div`
  background-color: var(--color-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  img {
    width: 100px;
    margin-bottom: 20px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-black);
    margin-bottom: 20px;
  }

  input {
    width: 15vw;
    height: 25px;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-blue-accent);
    margin: auto;
    

    &:focus {
      border-color: var(--color-black);
      outline: none;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
 

  &.SingUpButton {
    background-color: var(--color-blue-custom);
    color: var(--color-white);
    font-weight: bold;
    

    &:hover {
      background-color: var(--color-blue-hover);
    }
  }

  &.socialButton {
    border: 1px solid var(--color-grey-light);
    border-radius: 8px;
    padding: 10px 20px;
    margin: 0 10px;
    background-color: var(--color-white);
   
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-grey-hover);
    }
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: var(--color-gold);
  margin: 10px 0;
`;

export const LoginLink = styled.p`
  margin: 30px 0;
  font-size: 0.9rem;

  a {
    color: var(--color-blue-custom);
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
  color: var(--color-black);
}
`;


export const OrLine = styled.hr`
  border-top: 1px solid var(--color-grey-light);
  width: 100%;
  margin-top: 30px;
`;
