import React, { useState } from "react"
import feather from "feather-icons"
import featherdata1 from "../Databases/featherdata1.json"
import { useNavigate } from "react-router-dom"

const Feather1 = ({ value2 }) => {
	const icons = featherdata1.icons
	const navigate = useNavigate()
	const type = "class"

	const [selectedIcon, setSelectedIcon] = useState(null)

	const filteredIcons =
		value2 === ""
			? icons
			: icons.filter(icon =>
					icon.toLowerCase().includes(value2.toLowerCase())
			  )

	const handleOnClick = icon => {
		setSelectedIcon(icon)
		navigate(`/finalpagefe`, { state: { icon, type } })
	}

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{filteredIcons.map(icon => {
					const iconName = icon.split("/")[1]
					const svg = feather.icons[iconName].toSvg({
						width: 100,
						height: 150,
					})
					return (
						<div
							key={icon}
							className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer p-4 rounded-md shadow-md hover:bg-gray-100 cursor-pointer"
							onClick={() => handleOnClick(icon)}
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
							<p className="text-sm m-5">{icon.split("/")[1]}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Feather1
