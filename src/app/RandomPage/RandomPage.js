import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./randompage.css";
import Buttons from "./Buttons";
import ImageBox from "./ImageBox";

function RandomPage({ history }) {
  const currentUser = useSelector(({ userState }) => userState.currentUser);
  const { isFinished, isPlaying } = useSelector(({ gameState }) => gameState);
  useEffect(() => {
    if (isFinished || !isPlaying) {
      history.push("/");
    }
  }, [isFinished]);


  return !isFinished && isPlaying ? (
    <div className="container" data-testid="random-page">
      <div className="middle-container">
        <div>
          <ImageBox />
          <Buttons />
        </div>
      </div>
    </div>
  )
    : null;
}

export default withRouter(RandomPage);
