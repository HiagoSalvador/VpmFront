import styled from "styled-components";

export const StyledCarousel = styled.div`
  width: 100%;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--accent-color);
  }

  .swiper-pagination-bullet {
    background-color: var(--text-color);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--accent-color);
  }
`;

export const StyledSwiperWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleFeedback = styled.h2`
  color: var(--text-color);
  text-align: center;
  margin-top: 5rem;
  font-family: 'Montserrat', sans-serif;
`;

export const StyledSlide = styled.div`
  display: flex;
  line-height: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 17rem;
  background-color: var(--secondary-color);
  border-radius: 5px;
  border: 1px solid var(--button-color);
  margin-left: 0.1rem;

  h3 {
    color: var(--accent-color);
    text-align: center; 
  }

  p {
    margin-top: 5px;
    align-self: self-start;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Rating = styled.div`
  color: var(--gold-color);
  font-size: 1.2em;
  margin-top: 0.5em;
`;
