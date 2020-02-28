export const calculateRate = (numberOfDays, type) => {
  if (type === "fiction" || type === "novel") {
    return numberOfDays * 1.5;
  }

  return numberOfDays * 3;
};

export const calculateTotals = cartItems => {
  const regularBooks = cartItems.filter(item => item.type === "regular");
  const otherBooks = cartItems.filter(item => item.type !== "regular");

  const totalRegular = regularBooks.reduce(
    (acc, cartItem) => acc + cartItem.days * 3,
    0
  );
  const totalOthers = otherBooks.reduce(
    (acc, cartItem) => acc + cartItem.days * 1.5,
    0
  );

  return totalOthers + totalRegular;
};
