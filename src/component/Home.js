import React, { useState } from "react"
import NavBar from "./Navbar"
import Section from "./Section"
import { useFirebase } from "../context/firebase"
import Chooseside from "../AlliconComponent/Chooseside"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = () => {
	const [searchText, setSearchText] = useState("")

	const firebase = useFirebase()

	return (
		<>
			<NavBar />
			<Section setSearchText={setSearchText} />
			<Chooseside searchText={searchText} />
		</>
	)
}

export default Home
