import { useContext, useEffect, useState } from "react";
import "./Card.css";
import { UserContext } from "../App";

function Card(props) {
  const { data, edit } = useContext(UserContext);
  return (
    <div className="card-container">
      <div className="card-header-container">
        <table>
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
                        <button>Edit</button>
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
