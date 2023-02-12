import React, { useState } from "react"
import { useFirebase } from "../context/firebase"
import { useNavigate } from "react-router-dom"
import NavBar from "./Navbar"
import { Link } from "react-router-dom"
import Home from "./Home"

const SignUp = () => {
	const firebase = useFirebase()
	console.log(firebase)

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [cpassword, setCpassword] = useState("")

	const handleSubmit = async e => {
		e.preventDefault()
		if (password === cpassword) {
			try {
				await firebase.signupUserWithEmailAndPassword(email, password)
				alert("successfully user created")
			} catch (e) {
				alert("something is wrong")
			}
		} else {
			alert("please check the password part it does not matched")
		}
	}

	const navigate = useNavigate()

	return (
		<>
			{!firebase.isLoggedIn ? (
				<>
					<NavBar />
					<div className="w-full max-w-sm mx-auto mt-10">
						<form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
							<div className="mb-4">
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
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder="Password"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-black font-bold mb-2"
									htmlFor="email"
								>
									Conform Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="Cpassword"
									type="password"
									placeholder="Conform Password"
									value={cpassword}
									onChange={e => setCpassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex items-center justify-between mb-4">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit"
									onClick={handleSubmit}
								>
									Sign Up
								</button>
							</div>
							<div className="flex items-center justify-between">
								<Link to="/login">
									If already have a account Sign In
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

export default SignUp
