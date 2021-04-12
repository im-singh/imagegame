import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./resultpage.css";
import UserLists from "./UserLists";

function ResultPage() {
  const dispatch = useDispatch();
  const { currentUser, imageCount, images, likes, dislikes } = useSelector(
    ({ userState }) => userState
  );

  return (
    <div className="container">
      <div className="middle-container">
        <div className="result-box">
          <h2>Result !</h2>
          <div className="info">
            <Info
              label="Player:"
              value={currentUser ? currentUser.name : "Unknown"}
            />
            <Info label="Total Images:" value={imageCount} />
            <Info label="Likes:" value={likes} />
            <Info label="Dislikes:" value={dislikes} />
          </div>
          <hr />
          <UserLists />
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <p>
      {label} {value}
    </p>
  );
}

export default ResultPage;
