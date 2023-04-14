import "../Students/Student.scss";
import Button from "../icons/button.svg";
import KArthi from "../images/karthi.png";
import Edit from "../icons/edit.svg";
import Delete from "../icons/delete.svg";

const Student = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="students">
        <div className="students__head d-flex align-items-center justify-content-between border-bottom border-white pb-4 mb-4">
            <h1 className="text-black fw-bold">Students List</h1>
            <div className="d-flex align-items-center">
            <img src={Button} alt="Button" className="me-4" />
            <button className="btn bg-warning text-white fw-bold"> ADD NEW STUDENT</button>
            </div>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th className="text-secondary fw-bold">Name</th>
                    <th className="text-secondary fw-bold">Email</th>
                    <th className="text-secondary fw-bold">Phone</th>
                    <th className="text-secondary fw-bold">Enroll Number</th>
                    <th className="text-secondary fw-bold">Date of admission</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white mb-2">
                    <td><img src={KArthi} alt="Karthi" className="students__karthi rounded"/></td>
                    <td className="text-black fw-normal ">Karthi</td>
                    <td className="text-black fw-normal ">karthi@gmmail.com</td>
                    <td className="text-black fw-normal ">7305477760</td>
                    <td className="text-black fw-normal ">1234567305477760</td>
                    <td className="text-black fw-normal ">08-Dec, 2021</td>
                    <td><button className="border-0 bg-white shadow-0  btn"><img src={Edit} alt="Edit btn" /></button></td>
                    <td><button className="border-0 bg-white shadow-0 btn"><img src={Delete} alt="Delete btn" /></button></td>
                </tr>
                <tr className="bg-white mb-2">
                    <td><img src={KArthi} alt="Karthi" className="students__karthi rounded"/></td>
                    <td className="text-black fw-normal ">Karthi</td>
                    <td className="text-black fw-normal ">karthi@gmmail.com</td>
                    <td className="text-black fw-normal ">7305477760</td>
                    <td className="text-black fw-normal ">1234567305477760</td>
                    <td className="text-black fw-normal ">08-Dec, 2021</td>
                    <td><button className="border-0 bg-white shadow-0  btn"><img src={Edit} alt="Edit btn" /></button></td>
                    <td><button className="border-0 bg-white shadow-0 btn"><img src={Delete} alt="Delete btn" /></button></td>
                </tr>
                <tr className="bg-white mb-2">
                    <td><img src={KArthi} alt="Karthi" className="students__karthi rounded"/></td>
                    <td className="text-black fw-normal ">Karthi</td>
                    <td className="text-black fw-normal ">karthi@gmmail.com</td>
                    <td className="text-black fw-normal ">7305477760</td>
                    <td className="text-black fw-normal ">1234567305477760</td>
                    <td className="text-black fw-normal ">08-Dec, 2021</td>
                    <td><button className="border-0 bg-white shadow-0  btn"><img src={Edit} alt="Edit btn" /></button></td>
                    <td><button className="border-0 bg-white shadow-0 btn"><img src={Delete} alt="Delete btn" /></button></td>
                </tr>
            </tbody>
        </table>
        </div>
       
      </div>
    </div>
  );
};

export default Student;
