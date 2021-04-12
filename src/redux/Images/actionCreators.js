import imageTypes from "./types";

export const showNextImage = (imgObj) => {
  return {
    type: imageTypes.SHOW_NEXT_IMG,
    imgObj,
  };
};
export const fetchImage = () => {
  return {
    type: imageTypes.FETCH_IMAGE,
  };
};
