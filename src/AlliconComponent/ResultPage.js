import React, { useState, useEffect } from "react"
import AntDesign from "./antdesign"
import Feather1 from "./feather1"
import Fontawsome from "./fontawsome"
import Heroicon from "./heroicon"

const ResultPage = ({ value1, value2 }) => {
	return (
		<div>
			{value1 === "Fontawsome" && <Fontawsome value2={value2} />}
			{value1 === "Heroicon" && <Heroicon value2={value2} />}
			{value1 === "AntDesign" && <AntDesign value2={value2} />}
			{value1 === "Feather" && <Feather1 value2={value2} />}
		</div>
	)
}

export default ResultPage
