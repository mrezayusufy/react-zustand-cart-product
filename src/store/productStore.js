import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const api = 'https://fakestoreapi.com';
    const products = await fetch(`${api}/products/`)
      .then((data) => data.json())
      .catch((error) => error);
    set({ products });
  },
}));

export default useProductStore;
