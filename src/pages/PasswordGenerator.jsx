import "./PasswordGenerator.css";
import { useContext } from "react";
import { UserContext } from "../App";

function PasswordGenerator() {
  const { user, setDropdown } = useContext(UserContext);

  return (
    <div
      className="gen-container"
      onClick={() => {
        setDropdown(false);
      }}
    >
      <h1>Generator page</h1>
    </div>
  );
}

export default PasswordGenerator;
