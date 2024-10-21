import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./styles";
import { productList } from "../../data/productData"; 
import { ProductList } from "../../types/ProductList";

import "swiper/swiper-bundle.css";

const  Main: React.FC = () => {
  const chunkArray = (arr: ProductList[], chunkSize: number): ProductList[][] => {
    const chunks: ProductList[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const productGroups = chunkArray(productList, 3);

  return (
    <div>
      {productGroups.map((group, index) => (
        <Swiper
          key={index}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {group.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Por: R$ {product.price.toFixed(2)}</p>
                <p>Em até 5x</p>
                <button>Adicionar ao carrinho</button>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
};

export default Main;
