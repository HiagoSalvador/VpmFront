import React from 'react';  
import { FooterInfo, FooterSocial, SocialIcon, FooterLogo, FooterContainer } from './Footer.styles';
import Logo from '../header/images/logo.png'
import Insta from './images/insta.png';
import Ttk from './images/ttk.png';
import Face from './images/face.png';

const Footer: React.FC = () => {  
  return (
    <FooterContainer>
      <FooterInfo>
        <p>V.P.M Limp - Limpeza e Higiene
          <br />
          CNPJ: 12.345.678/0001-90 
          <br />
          Endereço: Rua Fernando Lona, - Bairro Campestre - Santo André - SP</p>
        <br />
        <p>Ofertas válidas enquanto durarem os estoques.
          <br/>
          Sua compra segura: Todas as vendas estão sujeitas à verificação e confirmação dos dados pela empresa.
          <br/>
          Preços e condições especiais online: Os preços, promoções e condições de pagamento anunciados são válidos
          <br/>
          exclusivamente para compras realizadas em nossa loja virtual. Em caso de divergência de valores dos produtos,
          <br/>
          prevalece o preço exibido no Carrinho de compras.
          <br/>
          <br />
          <strong>© Todos os direitos reservados.</strong>
        </p>
      </FooterInfo>
      <FooterSocial>
        <p>V.P.M Limp nas redes sociais</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={Insta} alt="Instagram VPM.Limp" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={Ttk} alt="TikTok VPM.Limp" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={Face} alt="Facebook VPM.Limp" />
        </a>
      </FooterSocial>
      <FooterLogo>
        <img src={Logo} alt="Logo da V.P.M Limp" />
      </FooterLogo>
    </FooterContainer>
  );
};

export default Footer;
