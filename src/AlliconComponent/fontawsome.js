import React, { useState, useContext } from "react"
import fontawesomeData from "../Databases/fontawsomedata.json"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

library.add(fas)

const FontAwesome = ({ value2 }) => {
	const icons = fontawesomeData.icons
	const type = "class"
	const navigate = useNavigate()

	const [selectedIcon, setSelectedIcon] = useState(null)

	const handleClick = icon => {
		setSelectedIcon(icon)
		navigate(`/finalpage`, { state: { icon, type } })
	}

	const filteredIcons =
		value2 === ""
			? icons
			: icons.filter(icon =>
					icon.toLowerCase().includes(value2.toLowerCase())
			  )

	console.log(filteredIcons)

	return (
		<>
			<div className="flex flex-wrap w-full">
				{filteredIcons.map((icon, index) => (
					<div
						key={icon + index}
						className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center py-4 cursor-pointer"
						onClick={() => handleClick(icon)}
					>
						<FontAwesomeIcon
							icon={["fas", icon.split(" ")[1]]}
							style={{ width: "100px", height: "100px" }}
							className={
								selectedIcon === icon
									? "bg-sky-700"
									: "bg-transparent"
							}
						/>
						<p className="text-sm">
							{icon.split(" ")[1].split("-")[1]}
						</p>
					</div>
				))}
			</div>
		</>
	)
}

export default FontAwesome
