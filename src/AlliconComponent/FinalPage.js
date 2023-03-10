import React from "react"
import { useLocation, Link } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "../component/Navbar"
import TabComponent from "../AllViewComponent/tabComponent"

import { useFirebase } from "../context/firebase"
import "firebase/firestore"

library.add(fas)

const Finalpage = props => {
	const location = useLocation()
	const { icon, type } = location.state
	const provider = "fontawsome"

	const firebase = useFirebase()

	const iconName = icon
	const providerName = "Font-Awsome"
	const values = ""
	const key = ""

	const handleSubmit = async e => {
		e.preventDefault()
		await firebase.addFavorite(iconName, providerName, values)
	}

	return (
		<>
			<NavBar />
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2">
				<Link to="/">Back</Link>
			</button>
			{type === "class" && (
				<div className="flex flex-col lg:flex-row items-center justify-center mt-4 mx-20">
					<div className="text-7xl w-70 mb-4 lg:mr-8">
						<FontAwesomeIcon
							icon={["fas", icon.split(" ")[1]]}
							style={{ width: "250px", height: "250px" }}
						/>
					</div>
					<div className="flex flex-col">
						<p className="text-3xl font-bold  mb-2">
							Name - {icon.split(" ")[1].split("-")[1]}
						</p>
						<p className="text-2xl font-bold  mb-3">
							Provier - Font Awsome
						</p>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							onClick={e => handleSubmit(e)}
						>
							add to favorite
						</button>
					</div>
				</div>
			)}
			<TabComponent
				icon={icon}
				type={type}
				provider={provider}
				key12={key}
			/>
		</>
	)
}

export default Finalpage
