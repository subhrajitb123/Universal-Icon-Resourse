import React, { useState, useEffect } from "react"
import heroicondata from "../Databases/heroicondata.json"
import { useNavigate } from "react-router-dom"

const Heroicon = ({ value2 }) => {
	const Icons = heroicondata.icons
	const type = "svg"

	const navigate = useNavigate()

	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		const filtered = Object.entries(Icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2])

	const handleOnClick = (icon, key) => {
		navigate(`/finalpageH`, { state: { icon, type, key } })
		console.log(icon)
	}

	return (
		<>
			{!filteredIcons ? (
				<div className="flex flex-wrap">
					{Object.entries(Icons).map(([key, icon], index) => (
						<div
							key={index}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 flex flex-col items-center justify-center p-4 rounded-md shadow-md hover:bg-gray-100 cursor-pointer  cursor-pointer"
							onClick={() => handleOnClick(icon, key)}
						>
							<svg
								viewBox={`0 0 ${(icon.width = 30)} ${(icon.height = 30)}`}
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
				<div className="flex flex-wrap">
					{filteredIcons.map(([key, icon], index) => (
						<div
							key={index}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 flex flex-col items-center justify-center p-4 rounded-md shadow-md hover:bg-gray-100 cursor-pointer cursor-pointer"
							onClick={() => handleOnClick(icon, key)}
						>
							<svg
								viewBox={`0 0 ${(icon.width = 40)} ${(icon.height = 40)}`}
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
