import gameTypes from "./types";

export const startGame = () => {
  return {
    type: gameTypes.START,
  };
};
export const FinishGame = () => {
  return {
    type: gameTypes.FINISH,
  };
};
