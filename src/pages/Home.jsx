import { useContext, useEffect } from "react";
import "./Home.css";
import { UserContext } from "../App";
import Card from "../components/Card";

function Home() {
  const { user, setDropdown, isLoggedin, data, setData } = useContext(UserContext);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_data")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  if (user.password === "") {
    return "Go to /login";
  }

  return (
    <div
      className="home-container"
      onClick={() => {
        setDropdown(false);
      }}
    >
      {isLoggedin
        ? data.map((item) => {
            var i = data.length;
            return <Card num={i} key={item[0]} site={item[1]} email={item[2]} password={item[3]} />;
          })
        : null}
    </div>
  );
}

export default Home;
