import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FinishGame } from "../../redux/Game/actionCreators";
import { showNextImage } from "../../redux/Images/actionCreators";

function Buttons({ history }) {
  const dispatch = useDispatch();

  const [isLike, setIsLike] = useState("");

  const handleFinish = () => {
    dispatch(FinishGame(returnImgObj()));
    setIsLike("");

    history.push("/result");
  };
  const handleDislike = () => {
    setIsLike("no");
  };
  const handleLike = () => {
    setIsLike("yes");
  };
  const handleNext = () => {
    dispatch(showNextImage(returnImgObj()));
    setIsLike("");
  };
  const returnImgObj = () => {
    return {
      like: isLike === "yes",
      dislike: isLike === "no",
    };
  };
  return (
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
  );
}

function Button({ label, clickHandler, isActive }) {
  return (
    <button className={isActive ? "active" : ""} onClick={clickHandler}>
      {label}
    </button>
  );
}
export default withRouter(Buttons);
