import { useContext } from "react";
import "./Navbar.css";
import { UserContext } from "../App";

function Navbar() {
  const { user, changeUser } = useContext(UserContext);
  return (
    <div className="navbar-container">
      <h1>This is the navbar</h1>
      <h1>User: {user}</h1>
      <button onClick={changeUser}>Change Name</button>
    </div>
  );
}

export default Navbar;
