import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { findIconDefinition, icon } from "@fortawesome/fontawesome-svg-core"

const SvgComponent = ({ icon1 }) => {
	const [prefix, name] = icon1.split(" ")
	const iconDefinition = findIconDefinition({ name })
	const pathData = icon(iconDefinition)?.icon?.[4]

	const style = {
		maxWidth: "300px",
		wordWrap: "break-word",
	}

	return (
		<div>
			<p>{name}</p>
			<p style={style}>{pathData}</p>
		</div>
	)
}

export default SvgComponent
