const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };

      case 'DELETE_TODO':
        const item_id = action.id
        console.log('acrion.id: ', item_id)
        return{
          ...state,
          list:[...state.list.filter((item)=> item.id !== item_id)]
        }
        case 'DELETE_ALL_TODO' : 
        return{
          ...state,
          list:[]
        }
      default : return state
  }
};

export default todoReducers