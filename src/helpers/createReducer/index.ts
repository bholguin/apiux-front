const useCreateReducer = () => {
  const createReducer = (initialState: any, handler: any) => {
    return (state = initialState, action: any) => {
      return handler?.hasOwnProperty(action.type)
        ? handler[action.type](state, action)
        : state;
    };
  };

  return {
    createReducer,
  };
};

export default useCreateReducer;
