import React from "react"
import NavBar from "./Navbar"
import Section from "./Section"
import { useFirebase } from "../context/firebase"
import Chooseside from "../AlliconComponent/Chooseside"
import FontAwsome from "../AlliconComponent/fontawsome"
import Feather from "../AlliconComponent/feather"
import Heroicon from "../AlliconComponent/heroicon"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = () => {
	const firebase = useFirebase()

	return (
		<>
			<NavBar />
			<Section />
			<Chooseside />
		</>
	)
}

export default Home
