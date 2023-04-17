import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "../index.css";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(logout());
  };

  return (
    <form className='logout'>
      <h1>
        Welcome <span>{user.name}</span>!
      </h1>
      <button onClick={(e) => logout(e)}>Log out</button>
    </form>
  );
};

export default Logout;
