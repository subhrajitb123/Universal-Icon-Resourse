import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon, library } from "@fortawesome/fontawesome-svg-core"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(faCoffee)

const SvgComponent = ({ icon1 }) => {
	const chosenIcon = library.definitions.fas[icon1]
	const iconData = icon(chosenIcon)

	return (
		<div>
			<pre>{iconData.render().html}</pre>
			<FontAwesomeIcon icon={icon1} />
		</div>
	)
}

export default SvgComponent
