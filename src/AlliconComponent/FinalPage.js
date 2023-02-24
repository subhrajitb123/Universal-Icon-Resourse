import React from "react"
import { useLocation, Link } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "../component/Navbar"
import TabComponent from "../AllViewComponent/tabComponent"

library.add(fas)

const Finalpage = props => {
	const location = useLocation()
	const { icon, type } = location.state

	return (
		<>
			<NavBar />
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-10">
				<Link to="/">Back</Link>
			</button>
			{type === "class" && (
				<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-8 mx-20">
					<div className="text-7xl w-70 mb-8 lg:mr-8">
						<FontAwesomeIcon
							icon={["fas", icon.split(" ")[1]]}
							style={{ width: "250px", height: "250px" }}
						/>
					</div>
					<div className="flex flex-col">
						<p className="text-4xl font-bold  mb-2">
							{icon.split(" ")[1].split("-")[1]}
						</p>
						<h2 className="text-2xl mb-2">Subhrajit Behera</h2>
						<p className="text-xl font-semibold mb-2">
							Web Developer
						</p>
						<p className="text-gray-500 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Duis ut hendrerit nibh. Sed ac sem euismod,
							fermentum quam vitae, tristique tellus.
						</p>
					</div>
				</div>
			)}
			<TabComponent
				icon={icon}
				type={type}
			/>
		</>
	)
}

export default Finalpage
