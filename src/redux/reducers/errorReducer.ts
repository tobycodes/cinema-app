const initialState = {};

const errorReducer = (
  state = initialState,
  { type, payload }: { type: any; payload: any }
): any => {
  switch (type) {
    default:
      return state;
  }
};

export default errorReducer;
