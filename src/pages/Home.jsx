import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { UserContext } from "../App";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  const { user, setDropdown, isLoggedin, setData, setEdit, edit } = useContext(UserContext);

  // input data
  const [site, setSite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForm, setForm] = useState(false);
  // input data

  useEffect(
    (id) => {
      id = user["id"];
      fetch("http://127.0.0.1:5000/get_data/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          if (isLoggedin === false) {
            nav("/login");
          }
        });

      // navigate if log in true

      // navigate if log in true
    },
    [isForm]
  );

  function addPassword(s, e, p, uid) {
    function Validate(s, e, p) {
      if (s === "") {
        return false;
      }
      if (e === "") {
        return false;
      }
      if (p === "") {
        return false;
      } else {
        return true;
      }
    } // validate the form

    if (Validate() === true) {
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
    <>
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
                  type="email"
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
            <button
              onClick={() => {
                if (!edit) {
                  setEdit(true);
                } else {
                  setEdit(false);
                }
              }}
            >
              Edit Password
            </button>
          </div>
        )}
        <button
          onClick={() => {
            console.log(user);
            console.log(isLoggedin);
            console.log(localStorage);
          }}
        >
          Check Data
        </button>

        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Remove localStorage
        </button>
      </div>
    </>
  );
}

export default Home;
