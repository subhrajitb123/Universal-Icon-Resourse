import React, { useState, useEffect } from "react"
import mdiData from "../Databases/mdi.json"

const MDI = ({ value2 }) => {
	const icons = mdiData.icons

	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		// Use Array.filter() to filter the icons based on the search value
		const filtered = Object.entries(icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2, icons])

	const pattern = /<path fill="[^"]*" d="([^"]*)"/

	return (
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
				  Object.entries(icons).map(([key, icon], index) => {
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
	)
}

export default MDI
