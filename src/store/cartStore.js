import { create } from 'zustand';

const useCartStore = create((set) => ({
  products: [],
  totalPrice: 0,
  cart: [],
  fetchProducts: async () => {
    const api = 'https://fakestoreapi.com';
    const products = await fetch(`${api}/products/`)
      .then((data) => data.json())
      .catch((error) => error);
    set({ products });
  },
  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
      totalPrice: state.totalPrice + product.price,
    }));
  },
  removeFromCart: (productID) => {
    set((state) => {
      const productToRemove = state.products.find(
        (product) => product.id === productId
      );
      return {
        cart: state.products.filter,
      };
    });
  },
}));
export default useCartStore;
