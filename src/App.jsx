import { createContext, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PasswordGenerator from "./pages/PasswordGenerator";
import Login from "./pages/Login";

export const UserContext = createContext();

function App() {
  const [isLoggedin, setLoggedin] = useState(true);
  const [user, setUser] = useState({
    id: "1",
    username: "Rei",
    password: "Rei",
  });
  const [dropdown, setDropdown] = useState(false);

  // for login page
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // for login page

  //data
  const [data, setData] = useState([]);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          dropdown,
          setDropdown,
          isLoggedin,
          setLoggedin,
          setUser,
          username,
          setUsername,
          password,
          setPassword,
          data,
          setData,
        }}
      >
        {isLoggedin ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gen" element={<PasswordGenerator />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
