export const finishUser = (state) => {
  let userObj = { ...state.currentUser };
  userObj.images = [...state.images];
  return userObj;
};
