import { imageState } from "./defaultState";
import imageType from "./types";
import gameTypes from "../Game/types";

export default function ImageReducer(state = imageState, action) {
  switch (action.type) {
    case imageType.SHOW_NEXT_IMG:
      return {
        ...state,
        isLoading: true,
        needFetch: true,
      };

    case imageType.FETCH_IMAGE:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case imageType.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        imageUrl: action.imgUrl,
        needFetch: false,
      };

    case imageType.FETCH_IMAGE_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        needFetch: false,
        error: action.message,
      };
    case gameTypes.FINISH:
      return {
        ...state,
        imageUrl: null,
      };
    default:
      return state;
      break;
  }
}
