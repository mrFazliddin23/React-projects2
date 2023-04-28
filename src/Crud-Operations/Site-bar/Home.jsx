import "./Home.scss";
import CardStudent from "../icons/student-card.svg";
import CardCourse from "../icons/course-card.svg";
import CardPayment from "../icons/paymet-card.svg";
import CardUsers from "../icons/userr.svg";

const Home = () => {  

  return ( 
        <div className="container">
          {/* <div className="navbar d-flex flex-column align-items-center position-fixed top-0 start-0">
            <a href="#"><img src={Logo} alt="Logo" /></a>
            <div className="d-flex flex-column align-items-center">
              <img className="navbar__img mb-1" src={Karthi} alt="Karthi img" />
              <p className="fw-bold fs-4 mb-1 text-black">Karthi Madesh</p>
              <span className="text-warning fw-normal fs-5">Admin</span>
            </div>

            <ul className="navbar__menu p-0">
              <li className="navbar__menu--list">
                <NavLink to="/" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={HomeImg} alt="home icon" /> Home</NavLink>
              </li>

              <li className="navbar__menu--list">
                <NavLink to="*" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={Course} alt="Course icon" /> Course</NavLink>
                </li>

              <li className="navbar__menu--list ">
                <NavLink to="/students" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={Student} alt="hat icon" />Students</NavLink>
                </li>

              <li className="navbar__menu--list ">
                <NavLink to="/payment" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={Payment} alt="paymeny icon" /> Payment</NavLink>
              </li>

              <li className="navbar__menu--list ">
                <NavLink to="*" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={Report} alt="report icon" />Report</NavLink>
                </li>

              <li className="navbar__menu--list ">
                <NavLink to="*" className="navbar__menu--link text-black fw-bold d-flex align-items-center gap-2"><img src={Settings} alt="settings icon"/>Settings</NavLink>
                </li>
            </ul>
            <button className="btn text-black border-0 fw-bold">Logout <img className="ms-3" src={Logout} alt="Arrow log out" /></button>
          </div> */}
          
        {/* <div className="d-flex align-items-center w-25 gap-3 position-fixed top-0 mt-3 end-0 me-3 search">
        <input type="search" className="form-control search bg-white" placeholder="Search ..."/>
          <img src={Xabar} alt="qo'ng'iroqcha" className="" />
        </div> */}

        <div className="home__cards d-flex justify-content-between "> 
          <div className="home__cards--card p-4 rounded position-relative">
              <img src={CardStudent} alt="icon" />
              <p className="home__cards--card--text0 mt-3 text-secondary fw-normal">Students</p>
              <p className="home__cards--card--text text-black fs-3 fw-bold position-absolute ">243</p>
          </div>

          <div className="home__cards--card home__cards--card1 p-4 rounded position-relative">
              <img src={CardCourse} alt="icon" />
              <p className="home__cards--card--text0 mt-3 text-secondary fw-normal">Course</p>
              <p className="home__cards--card--text text-black fs-3 fw-bold position-absolute ">13</p>
          </div>

          <div className="home__cards--card home__cards--card1 p-4 rounded position-relative">
              <img src={CardPayment} alt="icon" />
              <p className="home__cards--card--text0 mt-3 text-secondary fw-normal">Payments</p>
              <p className="home__cards--card--text text-black fs-3 fw-bold position-absolute ">556,000</p>
          </div>

          <div className="home__cards--card home__cards--card2 p-4 rounded position-relative">
              <img src={CardUsers} alt="icon" />
              <p className="home__cards--card--text0 mt-3 text-secondary fw-normal">Users</p>
              <p className="home__cards--card--text text-black fs-3 fw-bold position-absolute ">3</p>
          </div>

        </div>
        </div>
  );
};

export default Home;
