import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../actions/cartAction'
const Cart = () =>{
  const state = useSelector(state => state)
  console.log('store: ',state)
  const dispatch = useDispatch()
  return(
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems} </h2>
      <button onClick={()=> dispatch(addItem())} className='green'>Add Item to Cart</button>
      <button onClick={()=>dispatch(deleteItem())} disabled={state.numOfItems > 0 ? false : true} className='red'>Remove Item from Cart</button>
    </div>
  )
}

export default Cart