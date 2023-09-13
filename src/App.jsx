import { createContext, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PasswordGenerator from "./pages/PasswordGenerator";
import Textbin from "./pages/Textbin";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    id: "1",
    username: "",
    password: "",
  });
  const [edit, setEdit] = useState(false);
  const [isLoggedin, setLoggedin] = useState(user.username !== "");

  const [dropdown, setDropdown] = useState(false);

  // for login page
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // for login page

  //keeping user data
  const [data, setData] = useState([]);
  //keeping user data

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
          edit,
          setEdit,
        }}
      >
        {isLoggedin ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gen" element={<PasswordGenerator />} />
          <Route path="/textbin" element={<Textbin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
