import { ADD } from '../actions';

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      title: 'Shopping',
      status: false,
    },
    {
      id: 2,
      title: 'Play CS:GO',
      status: true,
    },
    {
      id: 3,
      title: 'Read book',
      status: true,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD : return{
      ...state, list:[...state.list, {
        id: state.list.length +1,
        title:action.payload,
        status:false
      }]
    }
    default: return state
  }
};

export default reducer;
