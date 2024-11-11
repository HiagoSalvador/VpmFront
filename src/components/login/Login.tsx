import React, { useState } from 'react';
import Logo from "../header/images/logo.png";
import {
  Container,
  LoginForm,
  FormGroup,
  Button,
  SocialLogin,
  ErrorMessage,
  ResetPasswordLink,
  RegisterLink,
  OrLine
} from './Login.styles';

export const LoginPage = () => {
  const [formData, setFormData] = useState({ cpf: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.cpf || !formData.password) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      alert('Login realizado com sucesso!');
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <LoginForm>
        <img src={Logo} alt="Logo" />
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              name="cpf"
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!error}
              className="inputAcesso"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              name="password"
              placeholder="Digite sua Senha"
              value={formData.password}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!error}
              className="inputAcesso"
            />
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit" className="loginButton" disabled={loading}>
            {loading ? 'Entrando...' : 'Login'}
          </Button>
          <ResetPasswordLink>
            <a href="/reset-password">Esqueceu sua senha?</a>
          </ResetPasswordLink>
          <OrLine />
          <SocialLogin>
            <Button type="button" className="socialButton">
              <i className="fab fa-google"></i> Google
            </Button>
            <Button type="button" className="socialButton">
              <i className="fab fa-facebook-f"></i> Facebook
            </Button>
          </SocialLogin>
          <RegisterLink>
            <strong>Não tem uma conta?</strong> <a href="/signup">Cadastre-se</a>
          </RegisterLink>
        </form>
      </LoginForm>
    </Container>
  );
};
