import { useState, useContext } from "react";
import { UserContext } from "../App";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedin, setLoggedin, username, setUsername, password, setPassword, setUser } =
    useContext(UserContext);
  const history = useNavigate();

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
        } else {
          setLoggedin(true);
        }
      });
  }

  return (
    <>
      <div className="form-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
              <button
                onClick={() => {
                  handleLogin(username, password);
                }}
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
