import React, { useState, useEffect } from "react"
import AntDesign from "./antdesign"
import Feather1 from "./feather1"
import Fontawsome from "./fontawsome"
import Heroicon from "./heroicon"
import Bootstrap from "./bootstarp"
import Fluent from "./fluent"
import MDI from "./Mdi"

const ResultPage = ({ value1, value2 }) => {
	return (
		<div>
			{value1 === "Fontawsome" && <Fontawsome value2={value2} />}
			{value1 === "Heroicon" && <Heroicon value2={value2} />}
			{value1 === "AntDesign" && <AntDesign value2={value2} />}
			{value1 === "Feather" && <Feather1 value2={value2} />}
			{value1 === "Bootstrap" && <Bootstrap value2={value2} />}
			{value1 === "Fluent" && <Fluent value2={value2} />}
			{value1 === "MDI" && <MDI value2={value2} />}
		</div>
	)
}

export default ResultPage
