import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./randompage.css";
import Buttons from "./Buttons";
import ImageBox from "./ImageBox";

function RandomPage({ history }) {
  const currentUser = useSelector(({ userState }) => userState.currentUser);
  const isFinished = useSelector(({ gameState }) => gameState.isFinished);

  useEffect(() => {
    if (isFinished || !currentUser) {
      history.push("/");
    }
  }, [isFinished]);

  return (
    !isFinished && (
      <div className="container">
        <div className="middle-container">
          <div>
            <ImageBox />
            <Buttons />
          </div>
        </div>
      </div>
    )
  );
}

export default withRouter(RandomPage);
