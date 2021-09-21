import React from "react";
import Login from "./login/Login";
import "./App.css";
import AppNew from "./AppNew";
import useAuthenticate from "./hooks/useAuthenticate";
// import Temp from "./ExportToExcel/temp";

const App = () =>{
  const isAuthtenticated = useAuthenticate();
  return (
    <div>
      {isAuthtenticated ? <AppNew/> : <Login/>}
    </div>
  );
}
export default App;