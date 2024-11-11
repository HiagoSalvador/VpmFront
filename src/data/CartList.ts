import { CartItem } from "../types/CartItem";

// chamar a API DE CART
export const initialCartItems: CartItem[] = [
    { id: 1, name: 'Produto 1', price: 19.99, quantity: 2, image: '' },
    { id: 2, name: 'Produto 2', price: 29.99, quantity: 1, image: '/images/produto2.jpg' },
    { id: 3, name: 'Produto 3', price: 39.99, quantity: 3, image: '/images/produto3.jpg' },
  ];