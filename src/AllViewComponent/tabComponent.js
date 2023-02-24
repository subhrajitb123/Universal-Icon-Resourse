import React, { useState } from "react"
import HtmlComponent from "./htmlComponent"
import ReactComponent from "./ReactComponent"
import SvgComponent from "./SvgComponent"

const TabComponent = ({ icon, type }) => {
	const [activeTab, setActiveTab] = useState(1)
	const icon1 = icon

	const handleTabClick = tabIndex => {
		setActiveTab(tabIndex)
	}

	return (
		<div className="flex flex-col items-center mt-10 ">
			<div className="flex space-x-4 mb-4">
				<button
					className={`${
						activeTab === 1
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700"
					} px-4 py-2 rounded-md font-semibold focus:outline-none`}
					onClick={() => handleTabClick(1)}
				>
					HTML
				</button>
				<button
					className={`${
						activeTab === 2
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700"
					} px-4 py-2 rounded-md font-semibold focus:outline-none`}
					onClick={() => handleTabClick(2)}
				>
					REACT COMPONENT
				</button>
				<button
					className={`${
						activeTab === 3
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700"
					} px-4 py-2 rounded-md font-semibold focus:outline-none`}
					onClick={() => handleTabClick(3)}
				>
					SVG
				</button>
			</div>
			{activeTab === 1 && <HtmlComponent icon1={icon1} />}
			{activeTab === 2 && <ReactComponent icon1={icon1} />}
			{activeTab === 3 && <SvgComponent icon1={icon1} />}
		</div>
	)
}

export default TabComponent
