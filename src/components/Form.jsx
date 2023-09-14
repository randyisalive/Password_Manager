import { useContext } from "react";
import "./Form.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    editID,
    editSite,
    setEditSite,
    datas,
    editUsername,
    setEditUsername,
    editPassword,
    setEditPassword,
  } = useContext(UserContext);
  const nav = useNavigate();

  function submitEditHandler(id, site, username, password) {
    fetch("http://127.0.0.1:5000//edit_user/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, site, username, password }),
    });
  }
  return (
    <>
      <div className="container mt-5">
        <form action="" className="form-control" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="" className="form-label">
            Site
          </label>
          <input
            type="text"
            className="form-control"
            value={editSite}
            onChange={(e) => setEditSite(e.target.value)}
          />
          <label htmlFor="" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={editUsername}
            onChange={(e) => setEditUsername(e.target.value)}
          />
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            value={editPassword}
            onChange={(e) => setEditPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-warning mt-3"
            onClick={() => {
              submitEditHandler(editID, editSite, editUsername, editPassword);
              nav("/");
            }}
          >
            Save & Change
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
