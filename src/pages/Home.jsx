import { useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";

function Home() {
  const { user, changeUser } = useContext(UserContext);

  return (
    <div className="home-container">
      <h1>This is home</h1>
      <h1>User home: {user}</h1>
    </div>
  );
}

export default Home;
