import React, { useEffect, useState } from "react"
import ResultPage from "./ResultPage"

const Chooseside = props => {
	const [value1, setvalue] = useState("Fontawsome")
	const [value2, setvalue2] = useState("")

	useEffect(() => {
		setvalue2(props.searchText)
	}, [props.searchText])

	useEffect(() => {}, [value1])
	return (
		<>
			<div className=" flex flex-col items-center justify-center w-full h-screen1">
				<h1 className="text-2xl p-2">
					Choose The Provider Of your choice From The Dropdown
				</h1>
				<br />
				<select onChange={e => setvalue(e.target.value)}>
					<option value="Fontawsome">Font Awsome</option>
					<option value="Heroicon">HeroIcon</option>
					<option value="AntDesign">Ant Design</option>
					<option value="Feather">Feather</option>
					<option value="MDI">Matrial Design Icon</option>
					<option value="Fluent">Fluent Icon</option>
					<option value="Bootstrap">Bootstrap Icon</option>
				</select>
				<style>
					{`
			.h-screen1 {
				height: 40vh;
			}
			`}
				</style>
			</div>

			<div>
				<ResultPage
					value1={value1}
					value2={value2}
				/>
			</div>
		</>
	)
}

export default Chooseside
