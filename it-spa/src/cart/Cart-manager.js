const key = "HOTEL_CART";
const key2 = "SPA_CART";

const cartManager = {
  addItem: (item) => {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      const serializedItem = JSON.stringify([item]);
      localStorage.setItem(key, serializedItem);
    } else {
      const parsedCart = JSON.parse(cart);

      parsedCart.push(item);

      const serializedCart = JSON.stringify(parsedCart);

      localStorage.setItem(key, serializedCart);
    }
  },

  removeItem: (item) => {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const parsedCart = JSON.parse(cart);

      const filteredItems = parsedCart.filter((cartItem) => {
        return cartItem.id !== item.id;
      });

      const serializedItems = JSON.stringify(filteredItems);
      localStorage.setItem(key, serializedItems);
    }
  },

  getAllItems: () => {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
  },
};
const cartManagerSPA = {
  addItem: (item) => {
    const cart = localStorage.getItem(key2);

    if (cart === null) {
      const serializedItem = JSON.stringify([item]);
      localStorage.setItem(key2, serializedItem);
    } else {
      const parsedCart = JSON.parse(cart);

      parsedCart.push(item);

      const serializedCart = JSON.stringify(parsedCart);

      localStorage.setItem(key2, serializedCart);
    }
  },

  removeItem: (item) => {
    const cart = localStorage.getItem(key2);

    if (cart !== null) {
      const parsedCart = JSON.parse(cart);

      const filteredItems = parsedCart.filter((cartItem) => {
        return cartItem.id !== item.id;
      });

      const serializedItems = JSON.stringify(filteredItems);
      localStorage.setItem(key2, serializedItems);
    }
  },

  getAllItems: () => {
    const cart = localStorage.getItem(key2);

    if (cart === null) {
      return [];
    } else {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
  },
};
export { cartManager, cartManagerSPA };
