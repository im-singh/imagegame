import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "../../redux/Users/actionCreators";
import { capFirstLtr } from '../Helpers/helper'
function UserLists() {
  const { users, currentUser } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const returnClass = (ele) => {
    if (ele.id === currentUser.id) return "active";
  };
  const changeUser = (ele) => {
    let data = {};
    data.imageCount = ele.images.length;
    data.likes = ele.images.filter((ele) => ele.like === true).length;
    data.dislikes = ele.images.filter((ele) => ele.dislike === true).length;
    data.user = ele;
    dispatch(setCurrentUser(data));
  };

  const reverseUsers = () => {
    let m = [...users];
    m.reverse();
    return m;
  };

  return (
    <div className="user-list">
      <h4>Finished Users: </h4>
      <div>
        {reverseUsers().map((ele, idx) => {
          return (
            <p key={idx} className={returnClass(ele)} onClick={() => changeUser(ele)}>
              {capFirstLtr(ele.name)}
            </p>
          );
        })}
      </div>

      {users.length === 0 && <p>No user available</p>}
    </div>
  );
}

export default UserLists;
