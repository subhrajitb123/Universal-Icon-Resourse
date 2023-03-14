import React, { useState } from "react"
import SignUp from "./component/Signup"
import SignIn from "./component/Signin"
import Home from "./component/Home"
import Contact from "./component/Contact"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Finalpage from "./AlliconComponent/FinalPage"
import FinalpageH from "./Final pages/FinalPageH"
import Finalpagefe from "./Final pages/FinalPagefe"
import FinalPagemdi from "./Final pages/FinalPagemdi"
import FinalPagefl from "./Final pages/FinalPagefl"
import FinalPageBo from "./Final pages/FinalPageBo"
import Forget from "./component/Forget"

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
					<Route
						path="/finalpage"
						element={<Finalpage />}
					></Route>
					<Route
						path="/finalpageH"
						element={<FinalpageH />}
					></Route>
					<Route
						path="/finalpagefe"
						element={<Finalpagefe />}
					></Route>
					<Route
						path="/forget"
						element={<Forget />}
					></Route>
					<Route
						path="/finalpagemdi"
						element={<FinalPagemdi />}
					></Route>
					<Route
						path="/finalpagefl"
						element={<FinalPagefl />}
					></Route>
					<Route
						path="/finalpagebo"
						element={<FinalPageBo />}
					></Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
