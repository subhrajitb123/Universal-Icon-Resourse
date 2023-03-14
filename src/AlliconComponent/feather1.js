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
			<div className="flex flex-wrap justify-center align-center">
				{filteredIcons.map(icon => {
					const iconName = icon.split("/")[1]
					const svg = feather.icons[iconName].toSvg({
						width: 70,
						height: 100,
					})
					return (
						<div
							key={icon}
							className="w-48 md:w-56 text-center p-2 cursor-pointer rounded-md shadow-md hover:bg-gray-100 cursor-pointer my-2 mx-2"
							onClick={() => handleOnClick(icon)}
						>
							<div
								className={`${
									selectedIcon === icon
										? "bg-sky-700"
										: "bg-transparent"
								} flex items-center justify-center align-center`}
								dangerouslySetInnerHTML={{ __html: svg }}
							/>
							<p className="text-sm">{icon.split("/")[1]}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Feather1
