export const finishUser = (state, action) => {
  let userObj = { ...state.currentUser };
  userObj.images = [...state.images, action.imgObj];
  return userObj;
};
