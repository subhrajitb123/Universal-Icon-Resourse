import React from "react"
import NavBar from "./Navbar"
import Section from "./Section"
import { useFirebase } from "../context/firebase"

const Home = () => {
	const firebase = useFirebase()

	return (
		<>
			<NavBar />
			<Section />
		</>
	)
}

export default Home
