import React, { useState, useEffect } from "react"
import { useFirebase } from "../context/firebase"
import "firebase/firestore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "./Navbar"
import feather from "feather-icons"

const Contact = () => {
	const firebase = useFirebase()
	const [favorites, setFavorites] = useState([])
	const [UseIcon, setUseIcon] = useState({})
	const [count, setcount] = useState(0)

	const [isOpen, setIsOpen] = useState(false)

	const openPopup = () => {
		setIsOpen(true)
	}

	const closePopup = () => {
		setIsOpen(false)
	}

	const fetchFavorites = async () => {
		if (!firebase.isLoggedIn) {
			alert("Please log in to view favorites.")
			return
		} else {
			await firebase.fetchFavorites()
			setFavorites(firebase.favorites)
		}
	}

	const handleSubmit = icon => {
		setUseIcon(icon)
		openPopup()
	}

	console.log(UseIcon)

	useEffect(() => {
		fetchFavorites()
	}, [firebase.isLoggedIn])

	console.log(favorites)

	const deleteOut = async id => {
		await firebase.deleteFavorite(id)
		setcount(count + 1)
		fetchFavorites()
		setFavorites(firebase.favorites)
		setIsOpen(false)
	}

	console.log(count)

	const ViewIcon = () => {
		{
			if (UseIcon.providerName === "Font-Awsome") {
				return (
					<>
						<div className="text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2">
							<FontAwesomeIcon
								icon={["fas", UseIcon.iconName.split(" ")[1]]}
								style={{
									width: "100px",
									height: "150px",
								}}
							/>
							<p className="text-sm m-2">
								{UseIcon.iconName.split(" ")[1]}
							</p>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
								onClick={() => deleteOut(UseIcon.id)}
							>
								Delete
							</button>
						</div>
					</>
				)
			}
		}

		{
			if (
				UseIcon.providerName === "HeroIcon" ||
				UseIcon.providerName === "MDI" ||
				UseIcon.providerName === "Fluent" ||
				UseIcon.providerName === "BootStrap"
			) {
				return (
					<>
						<div className="text-center cursor-pointer p-2 flex flex-col items-center justify-center align-center  rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="h-28 w-28 text-gray-600"
							>
								<path d={UseIcon.values} />
							</svg>
							<div className="flex flex-col">
								<p className="text-sm">{UseIcon.iconName}</p>
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
									onClick={() => deleteOut(UseIcon.id)}
								>
									Delete
								</button>
							</div>
						</div>
					</>
				)
			}
		}

		{
			if (UseIcon.providerName === "Feather") {
				const IconName1 = UseIcon.iconName.split("/")[1]
				const svg = feather.icons[IconName1].toSvg({
					width: 70,
					height: 100,
				})

				return (
					<>
						<div className="text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2">
							<div
								className=" flex items-center justify-center align-center"
								dangerouslySetInnerHTML={{
									__html: svg,
								}}
							/>
							<p className="text-sm m-2">{IconName1}</p>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
								onClick={() => deleteOut(UseIcon.id)}
							>
								Delete
							</button>
						</div>
					</>
				)
			}
		}
	}

	return (
		<>
			<NavBar />
			<div className="flex flex-wrap justify-center align-center">
				{favorites.map((icon, index) => {
					{
						if (icon.providerName === "Font-Awsome") {
							return (
								<>
									<div
										key={index}
										className="w-48 md:w-56 text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
										onClick={() => handleSubmit(icon)}
									>
										<FontAwesomeIcon
											icon={[
												"fas",
												icon.iconName.split(" ")[1],
											]}
											style={{
												width: "70px",
												height: "100px",
											}}
										/>
										<p className="text-sm m-2">
											{icon.iconName.split(" ")[1]}
										</p>
									</div>
								</>
							)
						}
					}

					{
						if (
							icon.providerName === "HeroIcon" ||
							icon.providerName === "MDI" ||
							icon.providerName === "Fluent" ||
							icon.providerName === "BootStrap"
						) {
							return (
								<>
									<div
										key={index}
										className="w-48 md:w-56 text-center cursor-pointer flex flex-col items-center justify-center align-center  p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
										onClick={() => handleSubmit(icon)}
									>
										<svg
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className="h-28 w-28 text-gray-600"
										>
											<path d={icon.values} />
										</svg>
										<div className="flex flex-col">
											<p className="text-sm">
												{icon.iconName}
											</p>
										</div>
									</div>
								</>
							)
						}
					}

					{
						if (icon.providerName === "Feather") {
							const IconName1 = icon.iconName.split("/")[1]
							const svg = feather.icons[IconName1].toSvg({
								width: 70,
								height: 100,
							})

							return (
								<>
									<div
										key={index}
										className="w-48 md:w-56 text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
										onClick={() => handleSubmit(icon)}
									>
										<div
											className=" flex items-center justify-center align-center"
											dangerouslySetInnerHTML={{
												__html: svg,
											}}
										/>
										<p className="text-sm m-2">
											{IconName1}
										</p>
									</div>
								</>
							)
						}
					}
				})}
			</div>

			{isOpen && (
				<div className="fixed z-10 inset-0 overflow-y-auto bg-gray-200">
					<div className="flex items-center justify-center min-h-screen">
						<div className="relative bg-white w-96 mx-auto rounded-lg">
							<div className="absolute top-0 right-0 pt-4 pr-4">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									onClick={closePopup}
								>
									Close
								</button>
							</div>
							<ViewIcon />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Contact
