import React from "react"
import { useLocation, Link } from "react-router-dom"
import NavBar from "../component/Navbar"
import TabComponent from "../AllViewComponent/tabComponent"

import { useFirebase } from "../context/firebase"
import "firebase/firestore"

const FinalPageBo = props => {
	const location = useLocation()
	const { icon, type, key, provider } = location.state

	const firebase = useFirebase()

	const iconName = key
	const providerName = "BootStrap"
	const pattern = /(?<=d=")[^"]*(?=")/
	const match = pattern.exec(icon.body)
	const d_value = match ? match[0] : null
	const values = d_value

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
			<div className="flex flex-col lg:flex-row items-center justify-center  align-center">
				<div className="flex flex-col lg:flex-row items-center justify-center align-center ">
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-80 w-80 text-gray-600"
					>
						{d_value && <path d={d_value} />}
					</svg>
					<div className="flex flex-col">
						<p className="text-xl lg:text-3xl font-bold  mb-2">
							Name - {key}
						</p>
						<p className="text-2xl font-bold  mb-3">
							Provider - BootStrap Icon
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
			</div>
			<TabComponent
				icon={icon}
				type={type}
				provider={provider}
				key12={iconName}
			/>
		</>
	)
}

export default FinalPageBo
