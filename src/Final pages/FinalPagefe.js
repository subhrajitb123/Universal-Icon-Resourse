import React from "react"
import { useLocation } from "react-router-dom"

const Finalpagefe = props => {
	const location = useLocation()
	const { icon, type } = location.state

	console.log(icon)
	console.log(type)

	return (
		<>
			<h1 className="text-2xl">hello this is the feather Final page</h1>
		</>
	)
}

export default Finalpagefe
