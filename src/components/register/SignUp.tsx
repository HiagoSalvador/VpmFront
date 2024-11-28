import React, { useState } from 'react';
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  ErrorMessage,
  LoginLink,
  LogoStyle,
  SocialLogin,
  OrLine,
} from './SignUp.styles';
import Logo from '../header/images/logo.png';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cpf: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.phone ||
      !formData.cpf
    ) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      alert('Cadastro realizado com sucesso!');
      setLoading(false);
    }, 2000);
  };

  const handleSocialLogin = (platform: string) => {
    alert(`Login com ${platform} ainda não implementado.`);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Cadastre-se</Title>
        <LogoStyle src={Logo} alt="Logo do site de produtos de limpeza" />

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cpf"
            placeholder="Digite seu CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="CPF deve estar no formato 123.456.789-10"
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
            title="Email deve estar em um formato válido"
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Digite seu Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\(\d{2}\) \d{5}-\d{4}"
            title="Telefone deve estar no formato (XX) XXXXX-XXXX"
          />
          <Input
            type="text"
            name="address"
            placeholder="Digite seu Endereço"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="city"
            placeholder="Digite sua Cidade"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="state"
            placeholder="Digite seu Estado"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="zipCode"
            placeholder="Digite seu CEP"
            value={formData.zipCode}
            onChange={handleChange}
            required
            pattern="\d{5}-\d{3}"
            title="CEP deve estar no formato 12345-678"
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button className="loginButton" type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
          <OrLine></OrLine>
          <SocialLogin>
            <Button
              className="socialButton"
              onClick={() => handleSocialLogin('Google')}
            >
              Google
            </Button>
            <Button
              className="socialButton"
              onClick={() => handleSocialLogin('Facebook')}
            >
              Facebook
            </Button>
          </SocialLogin>
          <LoginLink>
            <strong>Já tem uma conta?</strong> <a href="/login">Entrar</a>
          </LoginLink>
        </form>
      </FormWrapper>
    </Container>
  );
};
