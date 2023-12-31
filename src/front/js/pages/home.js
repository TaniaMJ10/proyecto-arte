import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const Registro = (e) => {
    e.preventDefault();
    actions.registro(email, user_name, password);
    setEmail("");
    setPassword("");
    setUser_name("");
    navigate("/login")
  };
  return (
    <div className="container">
		<h1>Registro</h1>
      <form onSubmit={(e)=>Registro(e)}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="text" value={user_name} onChange={(e)=>setUser_name(e.target.value)}/>
          </div>
        </div>
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
          Sign in
        </button>
      </form>
    </div>
  );
};
