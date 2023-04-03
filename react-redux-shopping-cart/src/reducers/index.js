import data from '../data'

const INITIAL_STATE = {
  bookList: data,
  cart: []
}

const reducer = (state = INITIAL_STATE,action) =>{
  switch(action.type){
    case 'ADD_BASKET' : return {
      ...state, cart:[...state.cart, action.payload]
    }
    case 'DELETE_BASKET' : return {
      ...state, cart: [...state.cart.filter((item)=> item !== action.payload)]
    }
    default: return state
  }
}

export default reducer