import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 0.5px solid var(--color-blue-accent);
  border-radius: 5px;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-black);
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  margin: 20px 0;

  & > * {
    margin: 5px 0; 
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--color-black); 
    font-family: var(--font-roboto);
    font-weight: 600;
  }
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px 0;

  &:hover {
    filter: brightness(0.8); 
    transition: filter 0.5s;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: var(--color-light-blue); 
  font-family: var(--font-roboto);
`;
