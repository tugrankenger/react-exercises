export const deleteBasket = book => {
  return {
    type: 'DELETE_BASKET',
    payload: book,
  };
};
