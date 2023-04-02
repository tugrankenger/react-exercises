import data from '../data'

const INITIAL_STATE = {
  bookList: data,
  cart: []
}

const reducer = (state = INITIAL_STATE,action) =>{
  return state;
}

export default reducer