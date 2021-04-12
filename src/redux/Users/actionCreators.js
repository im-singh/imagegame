import userTypes from "./types";

export const setUser = (userObj) => {
  return {
    type: userTypes.SET_NEW_USER,
    userObj,
  };
};

export const setCurrentUser = (data) => {
  return {
    type: userTypes.SET_USER,
    data,
  };
};
