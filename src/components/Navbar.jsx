import { useContext, useState } from "react";
import "./Navbar.css";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { user, dropdown, setDropdown, setLoggedin, setUser } = useContext(UserContext);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="logo-container">
          <img src="/logo1-background.png" alt="companyLogo" height={65} />
          <Link to="/">Password Manager</Link>
        </div>
      </div>
      <div className="right-container">
        <ul>
          <li>
            <Link>Image Manager</Link>
          </li>
          <li>Textbin</li>
          <li
            onClick={() => {
              setDropdown(true);
            }}
          >
            {user.username}
            {dropdown ? (
              <div className="li-dropdown">
                <ul>
                  <li>Setting</li>
                  <li>
                    <Link to="/gen">Password Generator</Link>
                  </li>
                  <div className="log-out-container">
                    <ul>
                      <li>
                        <Link
                          to="/login"
                          onClick={() => {
                            setLoggedin(false);
                            setUser({
                              id: "",
                              username: "",
                              password: "",
                            });
                          }}
                        >
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
