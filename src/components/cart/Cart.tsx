import React, { useState, useEffect } from "react";
import {
  CartContainer,
  CartHeader,
  CartItemCard,
  CartItemImage,
  CartItemDetails,
  CartItemActions,
  Total,
  CheckoutButton,
  EmptyCartMessage,
} from "./Cart.styles";
import { CartItem } from "../../types/CartItem";

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContainer>
      <CartHeader>Seu Carrinho</CartHeader>
      {cartItems.length > 0 ? (
        <>
          <div>
            {cartItems.map((item) => (
              <CartItemCard key={item.id}>
                <CartItemImage src={`/images/${item.id}.jpg`} alt={item.name} />
                <CartItemDetails>
                  <h3>{item.name}</h3>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </CartItemDetails>
                <CartItemActions>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  </div>
                </CartItemActions>
              </CartItemCard>
            ))}
          </div>
          <Total>Total: R$ {calculateTotal().toFixed(2)}</Total>
          <CheckoutButton onClick={() => alert("Finalizando compra...")}>
            Finalizar Compra
          </CheckoutButton>
        </>
      ) : (
        <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
      )}
    </CartContainer>
  );
};
