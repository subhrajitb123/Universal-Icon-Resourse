import React, { useState } from "react"
import SignUp from "./component/Signup"
import SignIn from "./component/Signin"
import Home from "./component/Home"
import Contact from "./component/Contact"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="/login"
						element={<SignIn />}
					></Route>
					<Route
						path="/register"
						element={<SignUp />}
					></Route>
					<Route
						path="/Contact"
						element={<Contact />}
					></Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
