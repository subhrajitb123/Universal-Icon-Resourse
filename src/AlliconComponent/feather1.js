import React, { useState } from "react"
import feather from "feather-icons"
import featherdata1 from "../Databases/featherdata1.json"

const Feather1 = ({ value2 }) => {
	const icons = featherdata1.icons
	const [selectedIcon, setSelectedIcon] = useState(null)

	const filteredIcons =
		value2 === ""
			? icons
			: icons.filter(icon =>
					icon.toLowerCase().includes(value2.toLowerCase())
			  )

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{filteredIcons.map(icon => {
					const iconName = icon.split("/")[1]
					const svg = feather.icons[iconName].toSvg({
						width: 100,
						height: 100,
					})
					return (
						<div
							key={icon}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer"
							onClick={() => setSelectedIcon(icon)}
						>
							<div
								//style={{ width: "100px", height: "100px" }}
								className={`${
									selectedIcon === icon
										? "bg-sky-700"
										: "bg-transparent"
								} flex items-center justify-center`}
								dangerouslySetInnerHTML={{ __html: svg }}
							/>
							<p className="text-sm mt-2">{icon.split("/")[1]}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Feather1
