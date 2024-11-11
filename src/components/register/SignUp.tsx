import React, { useState } from 'react';
import {
  Container,
  SignUpForm,
  FormGroup,
  Button,
  SocialLogin,
  ErrorMessage,
  LoginLink,
  OrLine
} from './SignUp.styles';

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
  const [socialRegister, setSocialRegister] = useState(false);

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
      alert(socialRegister ? 'Cadastro Social realizado com sucesso!' : 'Cadastro realizado com sucesso!');
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <SignUpForm>
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              name="name"
              placeholder="Digite seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="inputAcesso"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              name="cpf"
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleChange}
              required
              className="inputAcesso"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              title="CPF deve estar no formato 123.456.789-10"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="inputAcesso"
              pattern="^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
              title="Email deve estar em um formato válido"
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
              className="inputAcesso"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              name="phone"
              placeholder="Digite seu Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="inputAcesso"
              pattern="\(\d{2}\) \d{5}-\d{4}"
              title="Telefone deve estar no formato (XX) XXXXX-XXXX"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              name="address"
              placeholder="Digite seu Endereço"
              value={formData.address}
              onChange={handleChange}
              required
              className="inputAcesso"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="city"
              placeholder="Digite sua Cidade"
              value={formData.city}
              onChange={handleChange}
              required
              className="inputAcesso"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="state"
              placeholder="Digite seu Estado"
              value={formData.state}
              onChange={handleChange}
              required
              className="inputAcesso"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="zipCode"
              placeholder="Digite seu CEP"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="inputAcesso"
              pattern="\d{5}-\d{3}"
              title="CEP deve estar no formato 12345-678"
            />
          </FormGroup>
         
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit" className="SingUpButton" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
          <OrLine />
          <SocialLogin>
            <Button
              type="button"
              className="socialButton"
              onClick={() => setSocialRegister(true)} 
            >
              <i className="fab fa-google"></i> Google
            </Button>
            <Button
              type="button"
              className="socialButton"
              onClick={() => setSocialRegister(true)} 
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </Button>
          </SocialLogin>
          <LoginLink>
            <strong>Já tem uma conta?</strong> <a href="/login">Entrar</a>
          </LoginLink>
        </form>
      </SignUpForm>
    </Container>
  );
};
