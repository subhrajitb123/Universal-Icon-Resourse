import React, { useEffect, useState } from "react"
import BootstrapData from "../Databases/bootstrap.json"
import { useNavigate } from "react-router-dom"

const Bootstrap = ({ value2 }) => {
	const Icons = BootstrapData.icons
	console.log(Icons)
	const navigate = useNavigate()

	const type = "svg"
	const provider = "bootstrap"

	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		const filtered = Object.entries(Icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2])

	const pattern = /(?<=d=")[^"]*(?=")/ //  /(?<=d=")[^"]*(?=")/

	const handleOnClick = (icon, key) => {
		navigate(`/finalpagebo`, { state: { icon, type, key, provider } })
		console.log(icon)
	}

	return (
		<>
			{!filteredIcons ? (
				<div className="flex flex-wrap justify-center align-center">
					{Object.entries(Icons).map(([key, icon], index) => {
						const match = pattern.exec(icon.body)
						const d_value = match ? match[0] : null

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
									{d_value && <path d={d_value} />}
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
						const d_value = match ? match[0] : null
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
									{d_value && <path d={d_value} />}
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

export default Bootstrap
