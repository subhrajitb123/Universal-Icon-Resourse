import React from "react"
import { useLocation, Link } from "react-router-dom"
import NavBar from "../component/Navbar"
import TabComponent from "../AllViewComponent/tabComponent"

import { useFirebase } from "../context/firebase"
import "firebase/firestore"

const FinalpageH = props => {
	const location = useLocation()
	const { icon, type, key, provider } = location.state

	const firebase = useFirebase()

	const iconName = key
	const providerName = "HeroIcon"
	const values = icon.body.match(/d="([^"]+)"/)[1]

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
						{icon.body && (
							<path d={icon.body.match(/d="([^"]+)"/)[1]} />
						)}
					</svg>
					<div className="flex flex-col">
						<p className="text-xl lg:text-3xl font-bold  mb-2">
							Name - {key}
						</p>
						<p className="text-2xl font-bold  mb-3">
							Provier - Heroicon
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
				key12={key}
			/>
		</>
	)
}

export default FinalpageH
