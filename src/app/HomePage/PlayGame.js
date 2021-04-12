import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { startGame } from "../../redux/Game/actionCreators";
import { capFirstLtr } from "../Helpers/helper";

import "./css/playgame.css";
function PlayGame({ isShow, history }) {
  const currentUser = useSelector(({ userState }) => userState.currentUser);
  console.log("user: ", currentUser);
  const dispatch = useDispatch();

  const handlePlayBtn = () => {
    dispatch(startGame());
    history.push("/random-image");
  };
  return (
    isShow && (
      <div className="play-game">
        <p>
          <strong>Hi, </strong>
          <h2>{capFirstLtr(currentUser?.name)}</h2>
          <button onClick={handlePlayBtn}>Play Game</button>
        </p>
      </div>
    )
  );
}

export default withRouter(PlayGame);
