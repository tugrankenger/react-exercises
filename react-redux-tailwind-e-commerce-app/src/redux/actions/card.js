
export const card = (id, quantity) => async (dispatch) =>{
  const data = await fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res)=> res.json())
  dispatch({type:'ADD_CARD', payload: {
    id: data.id,
    image: data.image,
    title:data.title,
    description: data.description,
    price: data.price,
    qty : quantity
  }})
}