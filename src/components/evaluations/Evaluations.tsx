import { useRef, useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; 
import 'swiper/swiper-bundle.css';
import {
  StyledCarousel,
  StyledSwiperWrapper,
  StyledSlide,
  TitleFeedback,
  Rating,
} from './Evaluations.styles';
import { evaluationsList } from '../../data/evaluationsList';

const Evaluations: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null); 
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.navigation.prevEl.style.display = activeIndex === 0 ? 'none' : 'block';
      swiper.navigation.nextEl.style.display = activeIndex === swiper.slides.length - 1 ? 'none' : 'block';
    }
  }, [activeIndex]);

  return (
    <StyledCarousel>
      <TitleFeedback>Descubra o que nossos clientes estão falando!</TitleFeedback>
      <StyledSwiperWrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={80}
          slidesPerView={4}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)} 
          navigation
          pagination={{ clickable: true }}
        >
          {evaluationsList.map((slide, index) => (
            <SwiperSlide key={index}>
              <StyledSlide>
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p className="product-name"><span>{slide.productName}</span></p>
                <p className="description"><span>{slide.description}</span></p>
                <Rating>
                  {'★'.repeat(slide.rating)}
                  {'☆'.repeat(5 - slide.rating)}
                </Rating>
              </StyledSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiperWrapper>
    </StyledCarousel>
  );
};

export default Evaluations;
