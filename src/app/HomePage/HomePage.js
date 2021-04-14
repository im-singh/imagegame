import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/home.css";

import FormComponent from "./Form";
import PlayGame from "./PlayGame";

function HomePage() {
  const currentUser = useSelector((state) => state.userState.currentUser);
  const isFinished = useSelector(({ gameState }) => gameState.isFinished);

  return (
    <div className="container" data-testid="home-page">
      <div className="middle-container">
        <FormComponent isShow={currentUser === null || isFinished} />
        <PlayGame isShow={currentUser !== null && !isFinished} />
      </div>
    </div>
  );
}

export default HomePage;
