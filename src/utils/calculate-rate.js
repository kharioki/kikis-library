export const calculateRate = (numberOfDays, type) => {
  let extraDays;
  if (type === "regular") {
    extraDays = numberOfDays - 2;
    console.log({ extraDays });
    if (extraDays <= 0) {
      return 2;
    }

    return extraDays * 1.5 + 2;
  }

  if (type === "novel") {
    extraDays = numberOfDays - 3;
    console.log({ extraDays });
    if (extraDays <= 0) {
      return 4.5;
    }

    return extraDays * 1.5 + 3;
  }

  return numberOfDays * 3;
};

export const calculateTotals = cartItems => {
  const regularBooks = cartItems.filter(item => item.type === "regular");
  const fictionBooks = cartItems.filter(item => item.type === "fiction");
  const novelBooks = cartItems.filter(item => item.type === "novel");

  const _f = fictionBooks.map(
    item =>
      item.id && {
        ...item,
        price: calculateRate(item.days, item.type)
      }
  );
  const totalFiction = _f.reduce((acc, cartItem) => acc + cartItem.price, 0);

  const _r = regularBooks.map(
    item =>
      item.id && {
        ...item,
        price: calculateRate(item.days, item.type)
      }
  );
  const totalRegular = _r.reduce((acc, cartItem) => acc + cartItem.price, 0);

  const _n = novelBooks.map(
    item =>
      item.id && {
        ...item,
        price: calculateRate(item.days, item.type)
      }
  );
  const totalNovel = _n.reduce((acc, cartItem) => acc + cartItem.price, 0);

  return totalFiction + totalRegular + totalNovel;
};
