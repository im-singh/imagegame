import { gameState } from "./defaultState";
import gameTypes from "./types";
import userTypes from "../Users/types";

export default function gameReducer(state = gameState, action) {
  switch (action.type) {
    case gameTypes.START:
      return {
        ...state,
        isPlaying: true,
      };

    case gameTypes.FINISH:
      return {
        ...state,
        isPlaying: false,
        isFinished: true,
      };

    case userTypes.SET_NEW_USER:
      return {
        ...state,
        isFinished: false,
      };
    default:
      return state;
  }
}
