import React, { useEffect, useState } from "react"
import antdesigndata from "../Databases/antdesigndata.json"

const AntDesign = ({ value2 }) => {
	const Icons = antdesigndata.icons
	const [filteredIcons, setFilteredIcons] = useState([])

	useEffect(() => {
		const filtered = Object.entries(Icons).filter(([key, icon]) =>
			key.includes(value2)
		)
		setFilteredIcons(filtered)
	}, [value2])

	return (
		<>
			{filteredIcons.length > 0 ? (
				<div className="flex flex-wrap">
					{filteredIcons.map(([key, icon], index) => (
						<div
							key={index}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer"
						>
							<svg
								viewBox={`0 0 ${(icon.width = 40)} ${(icon.height = 40)}`}
							>
								{icon.body && (
									<path
										d={icon.body.replace(
											/^.*d="([^"]+)".*$/,
											"$1"
										)}
									/>
								)}
							</svg>
							<p className="text-sm">{key}</p>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-wrap">
					{Object.entries(Icons).map(([key, icon], index) => (
						<div
							key={index}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer"
						>
							<svg
								viewBox={`0 0 ${(icon.width = 30)} ${(icon.height = 30)}`}
							>
								{icon.body && (
									<path
										d={icon.body.replace(
											/^.*d="([^"]+)".*$/,
											"$1"
										)}
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

export default AntDesign
