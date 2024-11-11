import styled from "styled-components";

export const StyledCarousel = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSwiperWrapper = styled.div`
  width: 100%;
  max-width: 1800px; 
  height: 400px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleFeedback = styled.h2`
  color: var(--color-black);
  text-align: center;
  margin-top: 5rem;
  font-family: var(--font-montserrat);
`;

export const StyledSlide = styled.div`
  display: flex;
  line-height: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 17rem;
  background-color: var(--color-white);
  border-radius: 5px;
  border: 1px solid var(--color-blue-primary);
  padding: 5px;

  h3 {
    color: var(--color-blue-accent);
    text-align: center;
    font-family: var(--font-roboto);
    font-weight: 500;
    margin: 0;
  }

  p {
    margin: 0;
    align-self: flex-start;
    line-height: 2;
  }

  .product-name {
    font-family: var(--font-montserrat-alternates);
    font-weight: 600;
    font-size: 14px;
  }

  .description {
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 14px;  
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Rating = styled.div`
  color: var(--color-gold);
  font-size: 1.2em;
  margin-top: 0.5em;
`;
