import React, { useState } from "react"
import fontawesomeData from "../Databases/fontawsomedata.json"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fas)

const FontAwesome = () => {
	const icons = fontawesomeData.icons

	const [selectedIcon, setSelectedIcon] = useState(null)

	const handleClick = icon => {
		console.log("click the icon that is " + icon)
	}

	return (
		<div>
			<div className="flex flex-wrap">
				{icons.map(icon => (
					<div
						key={icon}
						className="w-1/4 text-center py-4 cursor-pointer"
						onClick={() => handleClick(icon)}
					>
						<FontAwesomeIcon
							icon={["fas", icon.split(" ")[1]]}
							style={{ width: "100px", height: "100px" }}
							className={
								selectedIcon === icon
									? "bg-gray-300"
									: "bg-transparent"
							}
						/>
						<p className="text-sm">{icon}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default FontAwesome
