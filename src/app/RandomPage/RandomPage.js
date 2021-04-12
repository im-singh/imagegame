import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FinishGame } from "../../redux/Game/actionCreators";

import "./randompage.css";
import { showNextImage } from "../../redux/Images/actionCreators";

function RandomPage({ history }) {
  const [isLike, setIsLike] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector(({ userState }) => userState.currentUser);
  const isFinished = useSelector(({ gameState }) => gameState.isFinished);

  useEffect(() => {
    if (isFinished || !currentUser) {
      history.push("/");
    }
  }, [isFinished]);
  const handleFinish = () => {
    dispatch(FinishGame());
    history.push("/result");
  };
  const handleDislike = () => {
    setIsLike("no");
  };
  const handleLike = () => {
    setIsLike("yes");
  };
  const handleNext = () => {
    let imgObj = {
      like: isLike === "yes",
      dislike: isLike === "no",
    };
    dispatch(showNextImage(imgObj));
    setIsLike("");
  };
  return (
    !isFinished && (
      <div className="container">
        <div className="middle-container">
          <div>
            <div className="image-box">
              <img src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            </div>
            <div className="button-box">
              <Button
                label="Like"
                clickHandler={handleLike}
                isActive={isLike === "yes"}
              />
              <Button
                label="Dislike"
                clickHandler={handleDislike}
                isActive={isLike === "no"}
              />
              <Button label="Next" clickHandler={handleNext} />
              <Button label="Finish" clickHandler={handleFinish} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function Button({ label, clickHandler, isActive }) {
  return (
    <button className={isActive ? "active" : ""} onClick={clickHandler}>
      {label}
    </button>
  );
}

export default withRouter(RandomPage);
