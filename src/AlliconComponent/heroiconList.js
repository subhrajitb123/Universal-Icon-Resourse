import React from "react"
import { Heroicon } from "@heroicons/react"
import iconsData from "@heroicons/data"

const HeroiconList = () => {
	return (
		<>
			{iconsData.map((iconData, index) => (
				<Heroicon
					key={index}
					{...iconData}
				/>
			))}
		</>
	)
}

export default HeroiconList
