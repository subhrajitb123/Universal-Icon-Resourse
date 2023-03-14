import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { findIconDefinition, icon } from "@fortawesome/fontawesome-svg-core"

const SvgComponent = ({ icon1, type1, provider1, key1 }) => {
	const style = {
		maxWidth: "300px",
		wordWrap: "break-word",
	}

	if (provider1 === "fontawesome") {
		const [prefix, name] = icon1.split(" ")
		const iconDefinition = findIconDefinition({ prefix, iconName: name })
		const pathData = icon(iconDefinition)?.icon?.[4]

		return (
			<div>
				<p>{name}</p>
				<p style={style}>{pathData}</p>
			</div>
		)
	}
	if (provider1 === "heroicon") {
		return (
			<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto ">
					&lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
					fill="none" viewBox="0 0 24 24" stroke="currentColor" &gt;
					&lt;path stroke-linecap="round" stroke-linejoin="round"
					stroke-width="2" d={icon1.body.match(/d="([^"]+)"/)[1]} &gt;
					&lt;/path &gt; &lt;/svg &gt;
				</pre>
			</div>
		)
	}

	if (provider1 === "feather") {
		return (
			<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto ">
					not provided by the user
				</pre>
			</div>
		)
	}

	{
		if (provider1 === "mdi") {
			const pattern = /<path fill="[^"]*" d="([^"]*)"/
			const match = pattern.exec(icon1.body)
			const d_value = match ? match[1] : null
			const values = d_value
			return (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
						28 28"&gt;
						<br />
						&lt;path d={d_value} /&gt;
						<br />
						&lt;/svg&gt;
					</pre>
				</div>
			)
		}
	}
	{
		if (provider1 === "fluent") {
			const pattern = /<path fill="[^"]*" d="([^"]*)"/
			const match = pattern.exec(icon1.body)
			const d_value = match ? match[1] : null
			const values = d_value
			return (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
						28 28"&gt;
						<br />
						&lt;path d={d_value} /&gt;
						<br />
						&lt;/svg&gt;
					</pre>
				</div>
			)
		}
	}

	{
		if (provider1 === "bootstrap") {
			const pattern = /(?<=d=")[^"]*(?=")/
			const match = pattern.exec(icon1.body)
			const d_value = match ? match[0] : null
			const values = d_value
			return (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
						28 28"&gt;
						<br />
						&lt;path d={d_value} /&gt;
						<br />
						&lt;/svg&gt;
					</pre>
				</div>
			)
		}
	}
}

export default SvgComponent
