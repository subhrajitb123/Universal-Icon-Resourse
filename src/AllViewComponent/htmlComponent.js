import React from "react"
import * as feather from "feather-icons"

const HtmlComponent = ({ icon1, type1, provider1, key1 }) => {
	if (provider1 === "fontawsome") {
		return (
			<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
				<p className="bg-gray-200 p-2 mb-4">
					To use the Font Awesome icons, add the following line inside
					the &lt;head&gt; section of your HTML page:
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
					&lt;link rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/&gt;
				</pre>
				<p className="bg-gray-200 p-2 mb-4">
					To use the Font Awesome icons, add the following line inside
					the &lt;body&gt; section of your HTML page:
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4">
					&lt;i class="{icon1}"&gt;&lt;/i&gt;
				</pre>
			</div>
		)
	}

	if (provider1 === "heroicon") {
		return (
			<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
				<p className="bg-gray-200 p-2 mb-4">
					To use the Heroicons, add the following line inside the
					&lt;head&gt; section of your HTML page:
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
					&lt;link rel="stylesheet"
					href="https://unpkg.com/@heroicons/vue@1.0.4/dist/heroicons.min.css"/&gt;
				</pre>
				<p className="bg-gray-200 p-2 mb-4">
					To use the Heroicons, add the following line inside the
					&lt;body&gt; section of your HTML page:
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
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
		const user = icon1.split("/")[1]
		const svgData = feather.icons[user].toSvg()
		const parser = new DOMParser()
		const svgElement = parser
			.parseFromString(svgData, "image/svg+xml")
			.querySelector("svg")
		const pathElement = svgElement.querySelector("path")
		const dValue = pathElement ? pathElement.getAttribute("d") : ""
		console.log(dValue)
		return (
			<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
				<p className="bg-gray-200 p-2 mb-4">
					To use the Feather icons , first of all we have to get the
					svg value
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
					go to the feather icon website and get svg value which can
					you used in our index.html file
				</pre>
			</div>
		)
	}

	if (provider1 === "mdi") {
		const iconName = key1
		const mdiIconName = `mdi${iconName.replace(
			/(^|-)(\w)/g,
			(match, p1, p2) => p2.toUpperCase()
		)}`

		//console.log(mdiIconName);

		const pattern = /<path fill="[^"]*" d="([^"]*)"/
		const match = pattern.exec(icon1.body)
		const d_value = match ? match[1] : null
		const values = d_value
		return (
			<>
				<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Material Design Icons , first of all we have
						to get the svg value
						<br />
						<br />
						Use the below code where you want the icon
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;svg viewBox=" 0 0 24 24"&gt; &lt;path d={d_value}{" "}
						/&gt; &lt;svg/&gt;
					</pre>
				</div>
			</>
		)
	}

	{
		if (provider1 === "fluent") {
			const pattern = /<path fill="[^"]*" d="([^"]*)"/
			const match = pattern.exec(icon1.body)
			const d_value = match ? match[1] : null
			const values = d_value
			return (
				<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Fluent Icons , first of all we have to get
						the svg value
						<br />
					</p>
					<h2 className="text-2xl font-bold mb-2">
						This is optional use in the Head of the html file
					</h2>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;link rel="stylesheet"
						href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"&gt;{" "}
						<br />
						&lt;script
						src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/js/fabric.min.js"&gt;&lt;/script&gt;
					</pre>
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
			const iconClass = "bi bi-" + key1

			return (
				<div className=" w-11/12 bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Bootstrap Icons , first of all we have to get
						the style file and link to html
						<br />
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;link rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"&gt;
					</pre>
					<h2 className="text-2xl font-bold mb-2">
						Used this Where you want the icon in your website
					</h2>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;i class={iconClass}&gt;&lt;/i&gt;
					</pre>
				</div>
			)
		}
	}
}

export default HtmlComponent
