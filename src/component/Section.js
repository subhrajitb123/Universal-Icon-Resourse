import React, { useState } from "react"
import FontAwesome from "../AlliconComponent/fontawsome"

const Section = props => {
	const [searchTerm, setSearchTerm] = useState("")

	const handleChange = e => {
		setSearchTerm(e.target.value)
		props.setSearchText(e.target.value)
	}

	return (
		<>
			<div className="bg-sky-600 flex flex-col items-center justify-center h-screen">
				<div className="w-4/5 md:w-3/5 p-2">
					<h1 className="text-4xl my-10 text-white text-center">
						Search Your Favorite icons from your favorite icon
						provider
					</h1>
					<input
						className="w-full mx-auto p-2 shadow-md rounded-md text-gray-700 focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={handleChange}
					/>
				</div>
				<style>
					{`
			.h-screen {
				height: 75vh;
			}
			`}
				</style>
			</div>
		</>
	)
}

export default Section
