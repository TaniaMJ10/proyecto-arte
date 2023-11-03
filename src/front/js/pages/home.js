import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
const [email, setEmail]= useState("")
const [user_name, setUser_name]= useState("")
const [password, setPassword]= useState("")
const registro =(e)=> {
	e.preventDefault()
	actions.registro(email, user_name, password)
	setEmail("")
	setPassword("")
	setUser_name("")
}
	return (
		<div className="text-center mt-5">
			<from>
				<div>
					<input type="email" />
				</div>
				<div><input type="text" /></div>
				<div><input type="password" /></div>
			</from>
		</div>
	);
};
