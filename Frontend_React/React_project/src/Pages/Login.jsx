import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    profilePic: "",
    phoneNo: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "profilePic" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <h1>{currState}</h1>

      <form onSubmit={handleSubmit}>
        {currState === "Sign Up" ? (
          <>
            <input
              type="text"
              id="fName"
              placeholder="First Name"
              value={formData.fName}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              id="lName"
              placeholder="Last Name"
              value={formData.lName}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="file"
              id="profilePic"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="number"
              id="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
            <p className="login-toggle">
              Already have an account  ?   
               <span onClick={() => setCurrState("Log In")}>  Log In Here</span>
            </p>
          </>
        ) : (
          <>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit">Log In</button>
            <p className="login-toggle">
              Create An Account  
              <span onClick={() => setCurrState("Sign Up")}>Click Here </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
