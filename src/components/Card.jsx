import { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Card() {
  const { data, edit, setEditID } = useContext(UserContext);

  function editHandler(id) {
    fetch("http://127.0.0.1:5000/edit_user/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    console.log(id);
    setEditID(id);
  }
  return (
    <div className="card-container">
      <div className="card-header-container">
        <table className="table table-hover">
          <thead>
            <th>No</th>
            <th>Site/Description</th>
            <th>Email</th>
            <th>Password</th>
            {edit ? <th>Actions</th> : null}
          </thead>
          <tbody>
            {data.map((item, index) => {
              var rowNum = index + 1; // index is how many times it loops
              return (
                <>
                  <tr
                    key={item[0]}
                    onClick={() => {
                      console.log("Dropdown: " + item[0]);
                      setDelete(true);
                    }}
                  >
                    <td>{rowNum}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    {edit ? (
                      <td>
                        <Link
                          to="/edit"
                          className="btn btn-warning"
                          onClick={() => editHandler(item[0])}
                        >
                          Edit
                        </Link>
                      </td>
                    ) : null}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
