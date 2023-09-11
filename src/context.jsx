import { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import App from "./App";

export const UserContext = createContext();

function Context() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider>
      <App />
    </UserContext.Provider>
  );
}

export default Context;
