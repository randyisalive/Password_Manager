import { useState, useContext } from "react";
import { UserContext } from "../App";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedin, setLoggedin, username, setUsername, password, setPassword, setUser } =
    useContext(UserContext);
  const history = useNavigate();
  const [warning, setWarning] = useState(false);

  const [filled, setFilled] = useState(true);

  if (isLoggedin === true) {
    history("/");
  }

  function handleLogin(username, password) {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUser({
          id: data[0],
          username: data[1],
          password: data[2],
        });
        if (data[1] == undefined || data[2] == undefined) {
          setLoggedin(false);
          setWarning(true);
        } else {
          setLoggedin(true);
          setWarning(false);
        }
      });
  }

  return (
    <>
      <div className="form-container p-5">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="form-control"
        >
          <div className="container">
            <div className="h1-container">
              <h1>Log In</h1>
            </div>
            {warning ? (
              <div className="warning-container my-3">
                <label htmlFor="">Wrong Credentials !!</label>
              </div>
            ) : null}

            <div className="form-content-container">
              <span>Username: </span>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setFilled(e.target.value === "");
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
            </div>

            {filled ? null : (
              <div className="btn-container  my-4">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleLogin(username, password);
                    setUsername("");
                    setPassword("");
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
