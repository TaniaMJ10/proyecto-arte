const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				
			]
		},
		actions: {
			registro: async(email,user_name,password) => {
				try {
					const response = await fetch("https://3001-taniamj10-authenticatio-zo80w5feznt.ws-us106.gitpod.io/api/sign_up",{
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
			login: async (email, password) => {
				try {
				  const response = await fetch("https://3001-taniamj10-authenticatio-zo80w5feznt.ws-us106.gitpod.io/api/login", {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				  });
				  if (response.ok) {
					alert("usuario logueado con éxito")
					// Manejar la respuesta exitosa, por ejemplo, puedes devolver algún dato
					return { success: true, data: await response.json() };
					
				  } else {
					// Manejar errores, por ejemplo, puedes devolver un objeto con información del error
					return { success: false, error: "Error en la autenticación" };
				  }
				} catch (error) {
				  console.error("Error al realizar la solicitud:", error);
				  // Manejar errores, por ejemplo, puedes devolver un objeto con información del error
				  return { success: false, error: "Error en la conexión" };
				}
			  }
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
		}
	};
};

export default getState;
