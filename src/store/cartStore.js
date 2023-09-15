import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const exist = state.cart.find((item) => item.id === product.id)
      
      if (exist) {
        const index = state.cart.findIndex((item) => item.id === product.id);
        state.cart[index].amount = state.cart[index].amount + 1;
        state.cart[index].totalPrice =
        state.cart[index].amount * state.cart[index].price;
        return {
          cart: [...state.cart],
        };
      } else {
        product.amount = 1;
        product.totalPrice = product.price;
        const newCart = [...state.cart, product];
        return {
          cart: newCart,
        };
      }
    });
  },
  removeFromCart: (productID) => {
    set((state) => {
      const newCart = state.cart.filter(item => item.id !== productID);
      return {
        cart: [...newCart],
      };
    });
  },
}));
export default useCartStore;
