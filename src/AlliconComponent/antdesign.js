import React, { useEffect, useState } from "react"
import antdesigndata from "../Databases/healthIcon.json"

const AntDesign = ({ value2 }) => {
	const Icons = antdesigndata.icons
	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		const filtered = Object.entries(Icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2])

	const pattern = /(?<=d=")[^"]*(?=")/

	return (
		<>
			<div className="flex flex-wrap">
				{filteredIcons.length
					? // If there are filtered icons, render them
					  filteredIcons.map(([key, icon], index) => {
							// Use RegExp.exec() to extract the 'd' attribute value from the icon data
							const match = pattern.exec(icon.body)
							const d_value = match ? match[1] : null
							console.log(d_value)
							return (
								<div
									key={index}
									className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer flex flex-col items-center justify-center p-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer"
								>
									<svg
										viewBox={`0 0 ${(icon.width = 35)} ${(icon.height = 35)}`}
										className="w-full h-full"
									>
										{/* Use the 'd' attribute value extracted from the icon data */}
										{d_value && <path d={d_value} />}
									</svg>
									<p className="text-sm">{key}</p>
								</div>
							)
					  })
					: // If there are no filtered icons, render all the icons
					  Object.entries(Icons).map(([key, icon], index) => {
							// Use RegExp.exec() to extract the 'd' attribute value from the icon data
							const match = pattern.exec(icon.body)
							const d_value = match ? match[1] : null

							return (
								<div
									key={index}
									className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer flex flex-col items-center justify-center p-4 rounded-md shadow-md hover:bg-gray-100 cursor-pointer"
								>
									<svg
										viewBox={`0 0 ${(icon.width = 100)} ${(icon.height = 100)}`}
										className="w-full h-full"
									>
										{/* Use the 'd' attribute value extracted from the icon data */}
										{d_value && <path d={d_value} />}
									</svg>
									<p className="text-sm">{key}</p>
								</div>
							)
					  })}
			</div>
		</>
	)
}

export default AntDesign
