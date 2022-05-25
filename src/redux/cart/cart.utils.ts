import { ICartItem } from './cart.types';
import { IProduct } from '../../data';

export const addItemToCart = (cartItems: ICartItem[], productToAdd: IProduct): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.product.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  
    return [...cartItems, { product: productToAdd, quantity: 1 }];
  }

export const removeItemFromCart = (cartItems: ICartItem[], id: number): ICartItem[] => cartItems.filter(item => item.product.id !== id);

export const decreaseItemQuantityFromCart = (cartItems: ICartItem[], id: number) => {
  return cartItems.reduce<ICartItem[]>((newitems, item) => {
    if (item.product.id !== id) {
      return [
        ...newitems,
        item
      ]
    }

    if (item.quantity > 1) {
      return [
        ...newitems,
        {
          ...item,
          quantity: item.quantity - 1
        }
      ]
    } else {
      return newitems
    }
  }, [])
};
