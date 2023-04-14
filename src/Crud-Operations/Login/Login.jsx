import "../Login/Login.scss";

const Login = () => {
  return (
    
    <div className="container pt-2">
        <div className="login mx-auto bg-white shadow rounded p-5 mt-5">
            <h1 className="fw-bold fs-2 text-black mb-4 text-center">CRUD OPERATIONS</h1>
            <h2 className="fw-bold text-black mb-2 text-center">SIGN IN</h2>
            <p className="fw-normal text-center text-secondary mb-4">Enter your credentials to access your account</p>

            <form>
                <label htmlFor="email">
                    <p className="text-start text-secondary mb-2">Email</p>
                </label>
                <input type="email" className="form-control p-2 mb-4 fw-bold fs-5 text-black w-100" placeholder="Enter your email" id="email"/>
                <label htmlFor="password">
                    <p className="text-start text-secondary mb-2">Password</p>
                </label>
                <input type="password" className="form-control p-2 mb-4 fw-bold text-black fs-5 w-100" placeholder="Enter your password" id="password"/>

                <button className="btn bg-warning w-100 p-2 text-white fw-bold fs-4 mt-4 mb-5">SIGN IN</button>
                <p className="fw-normal text-center text-secondary">Forgot your password? <span ><a href="#" className="text-warning">Reset Password</a></span></p>
            </form>

        </div>
    </div>
  )
}

export default Login;