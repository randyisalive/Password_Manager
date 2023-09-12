import { useState, useContext } from "react";
import { UserContext } from "../App";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const { isLoggedin, setLoggedin, username, setUsername, password, setPassword, setUser } =
    useContext(UserContext);

  const [filled, setFilled] = useState(true);

  if (isLoggedin === true) {
    return null;
  }

  return (
    <>
      <div className="form-container">
        <form action="">
          <div className="form-content-container">
            <div className="h1-container">
              <h1>Log In</h1>
            </div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setFilled(e.target.value === "");
                console.log(username);
              }}
            />
            {console.log(filled)}
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setFilled(e.target.value === "");
                setPassword(e.target.value);
              }}
            />
            {filled ? null : (
              <Link
                to="/"
                onClick={(e) => {
                  if (username === "" && password === "") {
                    return null;
                  } else if (username === "") {
                    console.log("Username empty");
                  } else {
                    setUser({
                      id: 1,
                      username: username,
                      password: password,
                    });
                  }
                  setLoggedin(true);
                }}
              >
                Log In
              </Link>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
