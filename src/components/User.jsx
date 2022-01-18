import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function User() {
  //context
  const { setCurrentUser } = useContext(UserContext);

  //default user object
  const defaultUserObject = {
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  };

  //state
  const [defaultUser, setDefaultUser] = useState(undefined);

  //the return
  if (defaultUser === undefined) {
    return (
      <div className="loginContainer">
        <button
          className="userLogin"
          onClick={() => {
            setCurrentUser(defaultUserObject);
            setDefaultUser([defaultUserObject]);
          }}
        >
          Log in as username: {defaultUserObject.username}
        </button>
      </div>
    );
  } else {
    return (
      <div className="logoutContainer">
        <div className="userWelcome">Hello {defaultUser[0].name}</div>
        <div className="UserUsername">username: {defaultUser[0].username}</div>
        <img
          className="avatar"
          src={`${defaultUser[0].avatar_url}`}
          alt="avatar"
        ></img>
        <div className="userLogout">
          <button
            className="userLogoutButton"
            onClick={() => {
              setDefaultUser(undefined);
              setCurrentUser("");
            }}
          >
            Sign Out from "{defaultUser[0].username}"{" "}
          </button>
        </div>
      </div>
    );
  }
}
