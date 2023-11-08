const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			registro: async(email,user_name,password) => {
				try {
					const response = await fetch("https://3001-taniamj10-authenticatio-sn7lvs7alnd.ws-us106.gitpod.io/api/sign_up",{
						method: "POST",
						body: JSON.stringify({
							email: email,
							user_name: user_name,
							password: password
						}),
						headers: {
							"Content-type": "application/json"
						}
					})
					if (response.status==200){
					const data = await response.json()
					console.log(data)
					alert("usuario creado con éxito")
					// 	localStorage.setItem("token", data.access_token)
					 }
				} catch (error){
					console.log(error)
				}
			},
		}
	};
};

export default getState;
