import Home from "./Crud-Operations/Site-bar/Home"
import Login from "./Crud-Operations/Login/Login"
import Student from "./Crud-Operations/Students/Student"
import Payment from "./Crud-Operations/Payment/Payment"
import Error from "./Crud-Operations/NotFound/Error";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
      
       <header>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/students" element={<Student/>}/>
        <Route path="/payment" element={<Payment/>} />
        <Route path="*" element={<Error/>} />
        </Routes>

       </header>
    
    
  
  )
}

export default App
