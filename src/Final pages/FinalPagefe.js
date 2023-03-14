import React from "react"
import { useLocation, Link } from "react-router-dom"
import feather from "feather-icons"
import NavBar from "../component/Navbar"
import TabComponent from "../AllViewComponent/tabComponent"

import { useFirebase } from "../context/firebase"
import "firebase/firestore"

const Finalpagefe = props => {
	const location = useLocation()
	const { icon, type } = location.state

	const IconName = icon.split("/")[1]
	const svg = feather.icons[IconName].toSvg({
		width: 250,
		height: 250,
	})

	const provider = "feather"

	const firebase = useFirebase()

	const iconName = icon
	const providerName = "Feather"
	const values = ""

	const handleSubmit = async e => {
		e.preventDefault()
		await firebase.addFavorite(iconName, providerName, values)
	}

	const key = ""

	return (
		<>
			<NavBar />
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2">
				<Link to="/">Back</Link>
			</button>
			{type === "class" && (
				<div className="flex flex-col lg:flex-row items-center justify-center mt-4 mx-20">
					<div className="text-7xl w-70 mb-4 lg:mr-8">
						<div
							className=" flex items-center justify-center align-center"
							dangerouslySetInnerHTML={{ __html: svg }}
						/>
					</div>
					<div className="flex flex-col">
						<p className="text-3xl font-bold  mb-2">
							Name - {icon.split("/")[1]}
						</p>
						<p className="text-2xl font-bold  mb-3">
							Provier - Feather
						</p>
						<button
							className="bg-blue-500 w-48 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default Finalpagefe
