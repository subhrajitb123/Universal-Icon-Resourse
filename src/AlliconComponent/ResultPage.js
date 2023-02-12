import React, { useState, useEffect } from "react"

import Feather from "./feather"
import Fontawsome from "./fontawsome"
import Heroicon from "./heroicon"

const ResultPage = ({ value1, value2 }) => {
	return (
		<div>
			{value1 === "Feather" && <Feather value2={value2} />}
			{value1 === "Fontawsome" && <Fontawsome value2={value2} />}
			{value1 === "Heroicon" && <Heroicon value2={value2} />}
		</div>
	)
}

export default ResultPage
