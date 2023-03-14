import React, { useState } from "react"
import { useFirebase } from "../context/firebase"

import NavBar from "./Navbar"

const Forget = () => {
	const firebase = useFirebase()
	const [email, setEmail] = useState("")

	const handleSubmit = async e => {
		e.preventDefault()
		firebase
			.ResetPassword(email)
			.then(() => {
				alert("email sent successfully")
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorMessage)
			})
	}

	return (
		<>
			<NavBar />
			<h2 className="text-center p-4 text-lg">Reset Password</h2>
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
							placeholder="Enter Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						onClick={e => handleSubmit(e)}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	)
}

export default Forget
