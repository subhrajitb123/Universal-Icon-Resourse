import React, { useState, useEffect } from "react"

const Section = props => {
	const [searchTerm, setSearchTerm] = useState("")
	const [searchCount, setSearchCount] = useState(0)
	const [searchTimer, setSearchTimer] = useState(null)

	useEffect(() => {
		const count = localStorage.getItem("searchCount")
		if (count) {
			setSearchCount(parseInt(count))
		}
	}, [])

	const handleChange = e => {
		setSearchTerm(e.target.value)
		props.setSearchText(e.target.value)

		// Check if user is not logged in and search limit has been reached
		if (!props.isLoggedIn && searchCount >= 10) {
			alert("You need to login to perform more searches")
			props.setSearchText("")
			return
		}

		// If there is an existing timer, clear it
		if (searchTimer) {
			clearTimeout(searchTimer)
		}

		// Start a new timer to increment the search count after 1 second
		const timer = setTimeout(() => {
			// Increment the search count and store it in localStorage
			setSearchCount(count => count + 1)
			localStorage.setItem("searchCount", searchCount + 1)
		}, 1000)

		// Save the timer ID so that we can clear it if needed
		setSearchTimer(timer)
	}

	return (
		<>
			<div className="bg-sky-600 flex flex-col items-center justify-center h-screen">
				<div className="w-4/5 md:w-3/5 p-3">
					<h1 className="text-2xl p-5 text-white text-center">
						Search Your Favorite icons from your favorite icon
						provider
					</h1>
					<input
						className="md:w-3/5 h-15 w-full flex justify-center align-center  mx-auto p-2 shadow-md rounded-md text-gray-700 focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={handleChange}
					/>
				</div>
				<style>
					{`
			.h-screen {
				height: 40vh;
			}
			`}
				</style>
			</div>
		</>
	)
}

export default Section
