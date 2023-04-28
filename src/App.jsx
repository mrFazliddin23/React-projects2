import Home from "./Crud-Operations/Site-bar/Home";
// import Login from "./Crud-Operations/Login/Login";
import Student from "./Crud-Operations/Students/Student";
import Payment from "./Crud-Operations/Payment/Payment";
import Error from "./Crud-Operations/NotFound/Error";
import { Routes, Route } from "react-router-dom";
import Header from "./Crud-Operations/Headers/Header";
import {context} from "./Crud-Operations/Context/Context";
import { useState } from "react";

function App() {

  const [lang, setLang] = useState('eng');
  const [mode,setMode] = useState('Light');


  return (
    <>
      <context.Provider value={{lang, mode}}>
      <Header setLang={setLang} setMode={setMode}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </context.Provider>
    </>
  );
}

export default App;
