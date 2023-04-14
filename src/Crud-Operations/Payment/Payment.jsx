import "../Payment/Payment.scss";
import Show from "../icons/show.svg";

const Payment = () => {
  return (
    <div className="container">
      <div className="payment">
        <h2 className="fw-bold fs-1 text-black boder-bottom pb-3 border-white mb-3">
          Payment Details
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th className="text-secondary fw-bold">Name</th>
              <th className="text-secondary fw-bold">Payment Schedule</th>
              <th className="text-secondary fw-bold">Bill Number</th>
              <th className="text-secondary fw-bold">Amount Paid</th>
              <th className="text-secondary fw-bold">Balance amount</th>
              <th className="text-secondary fw-bold">Date </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white mb-2">
              <td className="text-black fw-normal ">Karthi</td>
              <td className="text-black fw-normal ">First</td>
              <td className="text-black fw-normal ">00012223</td>
              <td className="text-black fw-normal ">INR 35,000</td>
              <td className="text-black fw-normal ">INR 55,000</td>
              <td className="text-black fw-normal ">08-Dec, 2021</td>
              <td>
                <button className="border-0 bg-white shadow-0  btn">
                  <img src={Show} alt="Edit btn" />
                </button>
              </td>

            </tr>
            <tr className="mb-2">
              <td className="text-black fw-normal ">Karthi</td>
              <td className="text-black fw-normal ">First</td>
              <td className="text-black fw-normal ">00012223</td>
              <td className="text-black fw-normal ">INR 35,000</td>
              <td className="text-black fw-normal ">INR 55,000</td>
              <td className="text-black fw-normal ">08-Dec, 2021</td>
              <td>
                <button className="border-0 shadow-0  btn">
                  <img src={Show} alt="Edit btn" />
                </button>
              </td>

            </tr>
            <tr className="bg-white mb-2">
              <td className="text-black fw-normal ">Karthi</td>
              <td className="text-black fw-normal ">First</td>
              <td className="text-black fw-normal ">00012223</td>
              <td className="text-black fw-normal ">INR 35,000</td>
              <td className="text-black fw-normal ">INR 55,000</td>
              <td className="text-black fw-normal ">08-Dec, 2021</td>
              <td>
                <button className="border-0 bg-white shadow-0  btn">
                  <img src={Show} alt="Edit btn" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
