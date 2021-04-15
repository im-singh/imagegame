import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { capFirstLtr } from "../Helpers/helper";

function User({ location }) {
  const currentUser = useSelector(({ userState }) => userState.currentUser);
  const isPlaying = useSelector(({ gameState }) => gameState.isPlaying);
  const isShowUser = () => {
    let ans = false;
    //always show on result page if user is available
    if (location.pathname === "/result" && currentUser) ans = true;
    //show on all page if user is playing
    if (isPlaying) ans = true;

    return ans;
  };
  return (
    isShowUser() && (
      <div className="user">
        User:{" "}
        <h2>
          <strong>{capFirstLtr(currentUser?.name)}</strong>
        </h2>
      </div>
    )
  );
}

export default withRouter(User);
