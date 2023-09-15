import create from 'zustand';

const useCartTotalStore = create((set, get) => ({
  cartTotal: 0,
  calculateCartTotal: () => {
    const cart = get().cartStore.cart;
  
    const cartTotal = cart.reduce(
      (total, product) => total + product.price,
      0
    );
    set(() => ({ cartTotal }));
  },
}));

export default useCartTotalStore;
