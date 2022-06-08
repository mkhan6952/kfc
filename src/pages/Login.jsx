import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const emailUpdate = (event) => {
    setEmail(event.target.value);
  };

  const passUpdate = (event) => {
    setPass(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Provide an Email");
      return;
    } else {
      setEmailError("");
    }

    if (!pass) {
      setPassError("Provide a Password");
      return;
    } else {
      setPassError("");
    }

    console.log(email, pass);
  };

  return (
    <div className="outer-container">
      <form onSubmit={handlerSubmit} className="inner-container">
        <div class="row mb-3">
          <label htmlFor="email" class="col-sm-2 col-form-label">
            Email:
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              onChange={emailUpdate}
              id="email"
              placeholder="Enter Email:"
            />
            <p style={{ color: "red" }}>{emailError}</p>
          </div>
          {/* <p>{email}</p> */}
        </div>
        <div class="row mb-3">
          <label htmlFor="password" class="col-sm-2 col-form-label">
            Password:
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              onChange={passUpdate}
              class="form-control"
              id="password"
              placeholder="Enter Password:"
            />
            <p style={{ color: "red" }}>{passError}</p>
          </div>
          {/* <p>{pass}</p> */}
        </div>

        <button type="submit" class="btn btn-success">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
