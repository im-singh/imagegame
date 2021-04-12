import imageTypes from "./types";

export const showNextImage = (imgObj) => {
  return {
    type: imageTypes.SHOW_NEXT_IMG,
    imgObj,
  };
};
