import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-light);
`;

export const LogoStyle = styled.img`
  display: block;
  margin: 40px auto 30px auto;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  background: var(--color-white);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--color-blue-accent);
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 26.4rem;

  &.loginButton {
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
    background-color: var(--color-white);
    margin: 0 10px;
    font-size: 14px;
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

export const ErrorMessage = styled.div`
  color: var(--green);
  margin-bottom: 10px;
  text-align: center;
`;

export const LoginLink = styled.div`
  text-align: center;
  margin-top: 30px;

  a {
    color: var(--color-blue-custom);
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: var(--color-black);
    }
  }
`;

export const OrLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;

  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-grey-neutral);
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }
`;
