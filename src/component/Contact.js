import React, { useState, useEffect } from "react"
import { useFirebase } from "../context/firebase"
import "firebase/firestore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "./Navbar"
import feather from "feather-icons"

const Contact = () => {
	const firebase = useFirebase()
	const [favorites, setFavorites] = useState([])

	const fetchFavorites = async () => {
		if (!firebase.isLoggedIn) {
			alert("Please log in to view favorites.")
			return
		} else {
			await firebase.fetchFavorites()
			setFavorites(firebase.favorites)
		}
	}

	useEffect(() => {
		fetchFavorites()
	}, [firebase.isLoggedIn])

	console.log(favorites)

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
											{
												icon.iconName
													.split(" ")[1]
													.split("-")[1]
											}
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
										className="w-48 md:w-56 text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
									>
										<div className="flex flex-col lg:flex-row items-center justify-center  align-center">
											<div className="flex flex-col lg:flex-row items-center justify-center align-center ">
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
										</div>
									</div>
								</>
							)
						}
					}

					{
						if (icon.providerName === "Feather") {
							const IconName1 = icon.split("/")[1]
							const svg = feather.icons[IconName1].toSvg({
								width: 250,
								height: 250,
							})

							return (
								<>
									<div
										key={index}
										className="w-48 md:w-56 text-center cursor-pointer p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
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
		</>
	)
}

export default Contact
