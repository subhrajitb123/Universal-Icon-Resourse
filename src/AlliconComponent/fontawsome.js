import React, { useState, useContext } from "react"
import fontawesomeData from "../Databases/fontawsomedata.json"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fas)

const FontAwesome = ({ value2 }) => {
	const icons = fontawesomeData.icons

	const [selectedIcon, setSelectedIcon] = useState(null)

	const handleClick = icon => {
		console.log("click the icon that is " + icon)
		setSelectedIcon("icon")
	}

	const filteredIcons = icons.filter(icon =>
		icon.toLowerCase().includes(value2.toLowerCase())
	)

	console.log(filteredIcons)

	return (
		<div>
			{filteredIcons.length === 0 || !filteredIcons ? (
				<div className="flex flex-wrap">
					{icons.map(icon => (
						<div
							key={icon}
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
			) : (
				<div className="flex flex-wrap">
					{filteredIcons.map(icon => (
						<div
							key={icon}
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
			)}
		</div>
	)
}

export default FontAwesome
