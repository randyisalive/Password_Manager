import "./PasswordGenerator.css";
import { useContext, useState } from "react";
import { UserContext } from "../App";

// THIS SECTION IS UNFINISHED

function PasswordGenerator() {
  const { setDropdown } = useContext(UserContext);
  const [number, setNumber] = useState(0);
  const [check, setCheck] = useState([
    {
      digits: 0,
      letter: 0,
      special: 0,
      upper: 0,
      lower: 0,
    },
  ]);
  function generatePassword(length) {
    var password = "";
    var number = "1234567890";
    var charset = "qwertyuiopasdfghjklzxcvbnm";
    var special = "!@#$%^&*()-=_+[]{};:,.<>/?~`";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    console.log(password);
  }

  return (
    <div
      className="gen-container"
      onClick={() => {
        setDropdown(false);
      }}
    >
      <div className="gen-card-container">
        <h1>Generator page</h1>
        <div className="gen-content-container">
          <div className="left-gen-container">
            <div className="option-container">
              <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <div className="radio-container">
                <div className="check-container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="digits"
                    onChange={(e) => {
                      setCheck((prev) => [{ ...prev, digits: 1 }]);
                      console.log(check);
                    }}
                  />
                  <span>Digits</span>
                </div>
                <div className="check-container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="letters"
                    onChange={() => {
                      setCheck((prev) => [{ ...prev, letter: 1 }]);
                    }}
                  />
                  <span>Letters</span>
                </div>
                <div className="check-container">
                  <input type="checkbox" name="" id="" value="special" />
                  <span>Special Characters</span>
                </div>
                <div className="check-container">
                  <input type="checkbox" name="" id="" value="upper" />
                  <span>Uppercase</span>
                </div>
                <div className="check-container">
                  <input type="checkbox" name="" id="" value="lower" />
                  <span>Lowercase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-gen-container">
            <h3>Your Password</h3>

            <div className="result-container">
              <input type="text" name="" id="" className="form-control" />
              <button
                className="btn btn-primary mt-5"
                onClick={() => {
                  generatePassword(number);
                  console.log(check);
                }}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
