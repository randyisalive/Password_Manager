import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Rendy");

  function changeUser() {
    const name = "Rei";
    setUser(name);
  }

  return (
    <>
      <UserContext.Provider value={{ user, changeUser }}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
