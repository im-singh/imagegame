import { imageState } from "./defaultState";
import imageType from "./types";

export default function ImageReducer(state = imageState, action) {
  switch (action.type) {
    case imageType.SHOW_NEXT_IMG:
      return {
        ...state,
      };

    default:
      return state;
      break;
  }
}
