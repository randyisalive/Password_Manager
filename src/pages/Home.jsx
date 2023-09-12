import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { UserContext } from "../App";
import Card from "../components/Card";
import { func } from "prop-types";

function Home() {
  const { user, setDropdown, isLoggedin, data, setData } = useContext(UserContext);

  // input data
  const [site, setSite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForm, setForm] = useState(false);
  // input data

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_data")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, [isForm]);

  function addPassword(s, e, p, uid) {
    if (s === "") {
      return null;
    }
    if (e === "") {
      return null;
    }
    if (p === "") {
      return null;
    } else {
      fetch("http://127.0.0.1:5000/add_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ s, e, p, uid }),
      });

      setSite("");
      setEmail("");
      setPassword("");
      setForm(false);
    }
  }

  return (
    <div
      className="home-container"
      onClick={() => {
        setDropdown(false);
      }}
    >
      {isLoggedin ? <Card /> : null}

      {isForm ? (
        <>
          <div className="form-container">
            <form action="">
              <span>Site: </span>
              <input
                type="text"
                name="site"
                value={site}
                placeholder="Site..."
                onChange={(e) => {
                  setSite(e.target.value);
                }}
              />
              <span>Email: </span>
              <input
                type="text"
                value={email}
                placeholder="Email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span>Password: </span>
              <input
                type="text"
                value={password}
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                addPassword(site, email, password, user.id);
              }}
            >
              Add Password
            </button>
          </div>
        </>
      ) : (
        <div className="btn-container">
          <button
            onClick={() => {
              setForm(true);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
