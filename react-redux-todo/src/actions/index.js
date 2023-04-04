export const ADD = 'ADD'
export const TOGGLE= 'TOGGLE'
export const REMOVE = 'REMOVE'

export const addList = (title) =>{
  return{
    type: ADD,
    payload:title,
  }
}