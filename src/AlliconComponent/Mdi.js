import React, { useState, useEffect } from "react"
import mdiData from "../Databases/mdi.json"
import { useNavigate } from "react-router-dom"

const MDI = ({ value2 }) => {
	const navigate = useNavigate()
	const icons = mdiData.icons
	const type = "svg"
	const provider = "mdi"

	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		// Use Array.filter() to filter the icons based on the search value
		const filtered = Object.entries(icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2, icons])

	const pattern = /<path fill="[^"]*" d="([^"]*)"/

	const handleOnClick = (icon, key) => {
		navigate(`/finalpagemdi`, { state: { icon, type, key, provider } })
		console.log(icon)
	}

	return (
		<>
			{!filteredIcons ? (
				<div className="flex flex-wrap justify-center align-center">
					{Object.entries(icons).map(([key, icon], index) => {
						const match = pattern.exec(icon.body)
						const d_value = match ? match[1] : null

						return (
							<div
								key={index}
								className="w-48 md:w-56 text-center p-2 flex flex-col items-center justify-center align-center rounded-md shadow-md hover:bg-gray-100 cursor-pointer  cursor-pointer my-2 mx-2"
								onClick={() => handleOnClick(icon, key)}
							>
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="h-28 w-28 text-gray-600"
								>
									{icon.body && <path d={d_value} />}
								</svg>
								<p className="text-sm">{key}</p>
							</div>
						)
					})}
				</div>
			) : (
				<div className="flex flex-wrap justify-center align-center">
					{filteredIcons.map(([key, icon], index) => {
						const match = pattern.exec(icon.body)
						const d_value = match ? match[1] : null
						return (
							<div
								key={index}
								className=" w-48 md:w-56 text-center p-2 flex flex-col items-center justify-center align-center rounded-md shadow-md hover:bg-gray-100 cursor-pointer cursor-pointer my-2 mx-2 "
								onClick={() => handleOnClick(icon, key)}
							>
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="h-28 w-28 text-gray-600"
								>
									{icon.body && <path d={d_value} />}
								</svg>
								<p className="text-sm">{key}</p>
							</div>
						)
					})}
				</div>
			)}
		</>
	)
}

export default MDI
