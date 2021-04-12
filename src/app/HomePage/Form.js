import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/form.css";
import { setUser } from "../../redux/Users/actionCreators";

function Form({ isShow }) {
  const [email, setEmail] = useState("");
  const userCount = useSelector(({ userState }) => userState.userCount);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = email.split("@")[0];

    let userObj = {
      id: userCount,
      email,
      name,
    };
    dispatch(setUser(userObj));
  };
  return (
    isShow && (
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
        <small>Please fill your email address.</small>
      </form>
    )
  );
}

export default Form;
