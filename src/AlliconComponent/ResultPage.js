import React, { useState, useEffect } from "react"

import Feather from "./feather"
import Fontawsome from "./fontawsome"
import Heroicon from "./heroicon"

const ResultPage = props => {
	return (
		<div>
			{props.value1 === "Feather" && <Feather />}
			{props.value1 === "Fontawsome" && <Fontawsome />}
			{props.value1 === "Heroicon" && <Heroicon />}
		</div>
	)
}

export default ResultPage
