// we create the function that will create action

export const addBasket = book =>{
  console.log(book)
  return {type:'ADD_BASKET', payload:book}
}