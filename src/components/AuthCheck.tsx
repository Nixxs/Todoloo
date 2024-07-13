import {useState} from "react"

type AuthUser = {
	isLoggedIn: boolean,
	name: string
}

const CheckAuth = () =>{
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			isLoggedIn: true,
			name: "Nick"
		});
	}

	const handleLogout = () => {
		setUser(null);
	}

	return(
		<>
			{user ? (			
			<>
				<h4>Login Status: {user?.isLoggedIn.toString()}</h4>
				<h4>User Name: {user?.name}</h4>
				<button
					onClick={handleLogout}
				>
					logout
				</button>
			</>
			):(
				<>
					<h4>please login:</h4>
					<button
					onClick={handleLogin}
					>
						login
					</button>
				</>
			)}
		</>
	);
}

export default CheckAuth;