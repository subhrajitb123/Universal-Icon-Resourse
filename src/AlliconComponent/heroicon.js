import React, { useState, useEffect } from "react"
import heroicondata from "../Databases/heroicondata.json"
import { useNavigate } from "react-router-dom"

const Heroicon = ({ value2 }) => {
	const Icons = heroicondata.icons
	const type = "svg"
	const provider = "heroicon"

	const navigate = useNavigate()

	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		const filtered = Object.entries(Icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2])

	const handleOnClick = (icon, key) => {
		navigate(`/finalpageH`, { state: { icon, type, key, provider } })
		console.log(icon)
	}

	return (
		<>
			{!filteredIcons ? (
				<div className="flex flex-wrap justify-center align-center">
					{Object.entries(Icons).map(([key, icon], index) => (
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
								{icon.body && (
									<path
										d={icon.body.match(/d="([^"]+)"/)[1]}
									/>
								)}
							</svg>
							<p className="text-sm">{key}</p>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-wrap justify-center align-center">
					{filteredIcons.map(([key, icon], index) => (
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
								{icon.body && (
									<path
										d={icon.body.match(/d="([^"]+)"/)[1]}
									/>
								)}
							</svg>
							<p className="text-sm">{key}</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Heroicon
