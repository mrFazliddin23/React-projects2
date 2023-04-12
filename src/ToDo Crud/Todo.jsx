import { useState } from "react";
import "../ToDo Crud/Todo.scss";
import { ToastContainer, toast } from 'react-toastify';

const Todo = () => {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");

  const addContact = () =>{
    const newContact = {Name: name, PhoneNum: tel, Date: date}
    
    if(name.length === 0 || tel.length === 0 || date.length === 0){
      toast.error("Please fill in the blanks", {autoClose: 1500});
    }
    else{
      setContact([...contact, newContact]);
      toast.success("Added Successufly", {autoClose:1000});
    }
    setName("");
    setTel('');
    setDate("");
  }


  const deleteContact = (id) =>{
    const filterContact = contact.filter((item)=>{
      return item.id !== id ;
    })
    setContact(filterContact);
  }

  return (
    <div className="container">
      <ToastContainer/>
      <div className="d-flex w-75 mx-auto justify-content-between align-items-center mt-2 mb-3">
        <h1 className="text-black fw-bold ">Add Contact</h1>
        <button onClick={()=>addContact()} className="btn bg-warning">Add New Contact</button>
      </div>
      <form className="w-75 mx-auto shadow p-4 mb-4">
        <input type="text"
          placeholder="Input Name"
          className="form-control px-3 py-2 mb-4 text-black fw-bold" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="tel"
          placeholder="Input Phone Number"
          className="form-control px-3 py-2 mb-4 text-black fw-bold" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <input type="date"
          className="form-control px-3 mb-3 py-2 text-black fw-bold" value={date} onChange={(e)=>setDate(e.target.value)}/>
      </form>

      <table className="table mx-auto w-75 bg-white">
        <thead >
          <tr className="border-bottom mb-5">
          <td className=" fw-bold fs-5 text-black">ID</td>
          <td className=" fw-bold fs-5 text-black">Name</td>
          <td className=" fw-bold fs-5 text-black">Phone Number</td>
          <td className=" fw-bold fs-5 text-black">Added Date</td>
          <td className=" fw-bold fs-5 text-black">Update</td>
          <td className=" fw-bold fs-5 text-black">Remove</td>
          </tr>
        </thead>

        <tbody>
        {
          contact.map((element, index)=>(
            <tr key={index} className="t_r">
              <td className="fw-bold fs-5 text-black">{index}</td>
            <td className="fw-bold fs-5 text-white">{element.Name}</td>
            <td className="fw-bold fs-5 text-white">{element.PhoneNum}</td>
            <td className="fw-bold fs-5 text-white">{element.Date}</td>
            <td>
              <button className="btn bg-success px-4 text-white">Edit</button>
            </td>
            <td>
              <button className="btn bg-danger px-4 text-white" onClick={()=>deleteContact(element.id)}>Delete</button>
            </td>
            </tr>
         
          ))
        }
         </tbody>
      </table>
    </div>
  );
};
export default Todo;
