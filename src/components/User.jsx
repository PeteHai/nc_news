import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function User() {
  //context
  const { currentUser, setCurrentUser } = useContext(UserContext);

  //state
  const [defaultUser, setDefaultUser] = useState(undefined);
  console.log(currentUser);

  //the return
  if (defaultUser === undefined) {
    return (
      <div>
        <button
          className="userLogin"
          onClick={() => {
            setDefaultUser([currentUser]);
          }}
        >
          Log in as username: {currentUser.username}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p className="userWelcome">Hello {defaultUser[0].name}</p>
        <p className="UserUsername">username: {defaultUser[0].username}</p>
        <img
          className="avatar"
          src={`${defaultUser[0].avatar_url}`}
          alt="avatar"
        ></img>
        <button
          className="userLogout"
          onClick={() => {
            setDefaultUser(undefined);
          }}
        >
          Sign Out from username: {defaultUser[0].username}{" "}
        </button>
      </div>
    );
  }
}
