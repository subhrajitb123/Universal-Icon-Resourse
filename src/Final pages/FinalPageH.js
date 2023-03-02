import React from "react"
import { useLocation, Link } from "react-router-dom"
import NavBar from "../component/Navbar"

const FinalpageH = props => {
	const location = useLocation()
	const { icon, type, key } = location.state

	return (
		<>
			<NavBar />
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-10">
				<Link to="/">Back</Link>
			</button>
			<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-8 mx-20">
				<div className="flex items-center">
					<svg
						className="w-64 h-64 lg:w-96 lg:h-96"
						viewBox={`0 0 ${(icon.width = 250)} ${(icon.height = 250)}`}
					>
						{icon.body && (
							<path d={icon.body.match(/d="([^"]+)"/)[1]} />
						)}
					</svg>
					<div className="flex flex-col ml-8">
						<p className="text-4xl font-bold mb-2">{key}</p>
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
			</div>
		</>
	)
}

export default FinalpageH
