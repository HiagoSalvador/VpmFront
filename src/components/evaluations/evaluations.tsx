import { useRef, useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper-bundle.css';
import { StyledCarousel, StyledSwiperWrapper, StyledSlide, TitleFeedback, Rating } from './styles';
import { evaluationsList } from '../../data/evaluationsList'; 
import { ProductEvaluation } from '../../types/ProductEvaluations'; 

const Carousel: React.FC = () => {
  const swiperRef = useRef<any>(null); 
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slides: ProductEvaluation[] = evaluationsList; 

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const prevButton = swiper.navigation.prevEl;
      const nextButton = swiper.navigation.nextEl;

      if (activeIndex === 0) {
        prevButton.style.display = 'none'; 
      } else {
        prevButton.style.display = 'block'; 
      }

      if (activeIndex === swiper.slides.length - 1) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'block'; 
      }
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper: any) => { 
    setActiveIndex(swiper.realIndex);
  };

  return (
    <StyledCarousel>
      <TitleFeedback>Descubra o que nossos clientes estão falando!</TitleFeedback>
      <StyledSwiperWrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={handleSlideChange}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <StyledSlide>
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p><span>{slide.productName}</span></p>
                <p><span>{slide.description}</span></p>
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

export default Carousel;
