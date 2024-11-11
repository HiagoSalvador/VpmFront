import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./Main.styles";
import { productList } from "../../data/productData";
import { ProductList } from "../../types/ProductList";
import "swiper/swiper-bundle.css";

const chunkArray = (arr: ProductList[], chunkSize: number): ProductList[][] => {
  const chunks: ProductList[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2)}`;
};

const ProductSwiper: React.FC<{ group: ProductList[]; addToCart: (product: ProductList) => void }> = ({
  group,
  addToCart,
}) => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
  >
    {group.map(({ id, image, name, price }) => (
      <SwiperSlide key={id}>
        <ProductCard>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{formatPrice(price)}</p>
          <p>Em até 5x</p>
          <button onClick={() => addToCart({ id, image, name, price })}>
            Adicionar ao carrinho
          </button>
        </ProductCard>
      </SwiperSlide>
    ))}
  </Swiper>
);

const Main: React.FC = () => {
  const productGroups = chunkArray(productList, 3);

  const addToCart = (product: ProductList) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingItemIndex = cartItems.findIndex((item: ProductList) => item.id === product.id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <React.Fragment>
      {productGroups.map((group, index) => (
        <ProductSwiper key={index} group={group} addToCart={addToCart} />
      ))}
    </React.Fragment>
  );
};

export default Main;
