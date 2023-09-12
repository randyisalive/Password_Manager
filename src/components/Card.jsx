import { useEffect } from "react";
import "./Card.css";

function Card(props) {
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
            <tr>
              <td>{props.num}</td>
              <td>{props.site}</td>
              <td>{props.email}</td>
              <td>{props.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
