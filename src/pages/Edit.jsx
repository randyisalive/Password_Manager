import { createContext, useContext, useEffect } from "react";
import "./Edit.css";
import Card from "../components/Card";
import { useState } from "react";
import { UserContext } from "../App";
import Form from "../components/Form";

function Edit() {
  const { editID, setEditSite, setDatas, setEditUsername, setEditPassword } =
    useContext(UserContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/edit_user/" + editID)
      .then((res) => res.json())
      .then((data) => {
        if (data == "") {
          console.log("data none");
        }
        setDatas(data);
        setEditSite(data[1]);
        setEditUsername(data[2]);
        setEditPassword(data[3]);
      });
  }, []);
  return (
    <>
      <Form />
    </>
  );
}

export default Edit;
