import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const Registro = (e) => {
    e.preventDefault();
    actions.registro(email, user_name, password);
    setEmail("");
    setPassword("");
    setUser_name("");
  };
  return (
    <div className="container">
		<h1>Registro</h1>
      <form>
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
        <button type="submit" className="btn btn-primary" onChange={(e)=>Registro(e.target.value)}>
          Sign in
        </button>
      </form>
    </div>
  );
};
