export const calculateRate = (numberOfDays, rate) => {
  return numberOfDays * rate;
};

export const calculateTotals = (cartItems, rate) => {
  return cartItems.reduce((acc, cartItem) => acc + cartItem.days * rate, 0);
};
