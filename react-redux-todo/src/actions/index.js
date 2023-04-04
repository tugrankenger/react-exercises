export const ADD = 'ADD'
export const TOGGLE= 'TOGGLE'
export const REMOVE = 'REMOVE'

export const addList = (title) =>{
  return{
    type: ADD,
    payload:title,
  }
}

export const toggleList = (id) =>{
  return{
    type: TOGGLE,
    payload: id
  }
}

export const removeList = () =>{
  return{
    type: REMOVE
  }
}