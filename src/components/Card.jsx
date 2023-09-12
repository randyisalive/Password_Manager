import { useContext, useEffect, useState } from "react";
import "./Card.css";
import { UserContext } from "../App";

function Card(props) {
  const { data } = useContext(UserContext);
  const [btnDel, setDelete] = useState(false);
  return (
    <div className="card-container">
      <div className="card-header-container">
        <table>
          <thead>
            <th>No</th>
            <th>Site/Description</th>
            <th>Email</th>
            <th>Password</th>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr
                    key={item[0]}
                    onMouseOver={() => {
                      console.log("Mouse over tr");
                      setDelete(true);
                    }}
                    onMouseLeave={() => {
                      setDelete(false);
                    }}
                  >
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    {btnDel ? (
                      <td>
                        <button>Delete</button>
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
