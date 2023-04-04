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
  return state;
};

export default reducer;
