import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const queryClient = useQueryClient();

  const addItemToCart = useMutation({
    mutationFn: (item: CartItem) => {
      const existingCart: CartItem[] = queryClient.getQueryData(["cart"]) || [];

      const existingItem = existingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart: CartItem[];
      if (existingItem) {
        updatedCart = existingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...existingCart, { ...item, quantity: 1 }];
      }

      return Promise.resolve(updatedCart);
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
    },
  });
  const removeItemFromCart = useMutation({
    mutationFn: (itemId: string) => {
      const existingCart: CartItem[] = queryClient.getQueryData(["cart"]) || [];
      const updatedCart = existingCart.filter((item) => item.id !== itemId);
      return Promise.resolve(updatedCart);
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
    },
  });

  const getCart = () => queryClient.getQueryData<CartItem[]>(["cart"]) || [];

  return { addItemToCart, removeItemFromCart, getCart };
};
