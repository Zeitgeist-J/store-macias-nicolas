const initialState = {
  user: null,
  products: []
};

const functionsCreator = (newState) => ({
  SET_USER: ({ user }) => {
    newState['user'] = user;
    return newState;
  },
  SET_PRODUCTS: (products) => {
    newState['products'] = [...products]
    return newState;
  }
})

const reducer = (state = initialState, action) => {
  console.log(action)

  const { type } = action;
  const processAction = functionsCreator(state);

  const reduce = processAction[type];
  return reduce ? reduce(action) : state;
}

export default reducer