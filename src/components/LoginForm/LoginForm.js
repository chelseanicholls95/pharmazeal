import "./loginform.css";

const LoginForm = () => {
  return (
    <div>
      <form className="form bg-dark text-white mt-5">
        <h1 className="title text-center m-3">Store Login</h1>
        <div className="input">
          <div className="row mb-3">
            <div className="col-sm-10 mx-auto">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 mx-auto">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-light">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
