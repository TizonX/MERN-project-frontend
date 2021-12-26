import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  //
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  //
  const submitForm = async () => {
    let result = await fetch("http://localhost:5000/Register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
        />
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
        />
        <label htmlFor="exampleFormControlInput3" className="form-label">
          password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="password"
        />
        <button
          type="button"
          className="btn btn-info mt-3"
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
