import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = (e) => {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
    
  };
  return (
    <div className="container">
		<h1>Login</h1>
      <form onSubmit={(e)=>Login(e)}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3"value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3" value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" >
          Login
        </button>
      </form>
    </div>
  );
};
