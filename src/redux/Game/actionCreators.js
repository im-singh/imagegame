import gameTypes from "./types";

export const startGame = () => {
  return {
    type: gameTypes.START,
  };
};
export const FinishGame = (imgObj) => {
  return {
    type: gameTypes.FINISH,
    imgObj,
  };
};
