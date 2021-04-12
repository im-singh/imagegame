import { userState } from "./defaultState";
import userTypes from "./types";
import gameTypes from "../Game/types";
import imageTypes from "../Images/types";
import { finishUser } from "./helper";

export default function userReducer(state = userState, action) {
  switch (action.type) {
    case userTypes.SET_NEW_USER:
      return {
        ...state,
        userCount: state.userCount + 1,
        currentUser: action.userObj,
        likes: 0,
        dislikes: 0,
        imageCount: 0,
      };

    case userTypes.SET_USER:
      return {
        ...state,
        currentUser: action.data.user,
        likes: action.data.likes,
        dislikes: action.data.dislikes,
        imageCount: action.data.imageCount,
      };
    case gameTypes.FINISH:
      return {
        ...state,
        users: [...state.users, finishUser(state)],
        images: [],
      };
    case imageTypes.SHOW_NEXT_IMG:
      return {
        ...state,
        imageCount: state.imageCount + 1,
        images: [...state.images, action.imgObj],
        likes: action.imgObj.like ? state.likes + 1 : state.likes,
        dislikes: action.imgObj.dislike ? state.dislikes + 1 : state.dislikes,
      };

    default:
      return state;
  }
}
