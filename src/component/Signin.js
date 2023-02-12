import React, { useState } from "react"
import { useFirebase } from "../context/firebase"
import { Link } from "react-router-dom"
import NavBar from "./Navbar"
import Home from "./Home"

const SignIn = () => {
	const firebase = useFirebase()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async e => {
		e.preventDefault()
		if (await firebase.LoginUserWithEmailAndPassword(email, password)) {
			alert("successfully login in the Application")
		} else {
			alert("something is wrong")
		}
	}

	return (
		<>
			{!firebase.isLoggedIn ? (
				<>
					<NavBar />
					<div className="w-full max-w-sm mx-auto mt-10">
						<form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<div className="mb-4">
								<label
									className="block text-black font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-black font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="Password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex items-center justify-between mb-4">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit"
									onClick={handleSubmit}
								>
									Sign In
								</button>
							</div>
							<div className="flex items-center justify-between">
								<Link to="/register">
									If do not have a account Sign Up
								</Link>
							</div>
						</form>
					</div>
				</>
			) : (
				<Home />
			)}
		</>
	)
}

export default SignIn
