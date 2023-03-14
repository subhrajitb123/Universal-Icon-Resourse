import React from "react"

const ReactComponent = ({ icon1, type1, provider1, key1 }) => {
	const fontAwesomeImportCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'`
	const useful = `<div dangerouslySetInnerHTML={{ __html: userSvg }} />`
	if (provider1 === "mdi") {
		var iconName = key1
		var mdiIconName = `mdi${iconName.replace(
			/(^|-)(\w)/g,
			(match, p1, p2) => p2.toUpperCase()
		)}`
	}

	if (provider1 === "fluent") {
		const pattern = /<path fill="[^"]*" d="([^"]*)"/
		const match = pattern.exec(icon1.body)
		var d_value = match ? match[1] : null
		var values = d_value
	}

	if (provider1 === "bootstrap") {
		var iconClass = "bi bi-" + key1
	}

	return (
		<>
			{provider1 === "fontawsome" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Font Awesome icons, please Download this
						following Dependencies
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						npm i --save @fortawesome/fontawesome-svg-core <br />
						npm install --save @fortawesome/free-solid-svg-icons{" "}
						<br />
						npm install --save @fortawesome/react-fontawesome <br />
					</pre>
					<h3 className="font-bold text-xl mb-5">
						Import this at the top of the page
					</h3>
					<p className="bg-white p-2 rounded-md shadow mb-4">
						{fontAwesomeImportCode} <br />
						import {icon1} from '@fortawesome/free-solid-svg-icons'
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4">
						&lt;FontAwesomeIcon icon={icon1}/&gt;
					</pre>
				</div>
			)}

			{provider1 === "heroicon" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Heroicons, add the following line in your
						React page:
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto ">
						&lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6
						w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor" &gt; &lt;path
						stroke-linecap="round" stroke-linejoin="round"
						stroke-width="2" d={icon1.body.match(/d="([^"]+)"/)[1]}{" "}
						&gt; &lt;/path &gt; &lt;/svg &gt;
					</pre>
				</div>
			)}

			{provider1 === "feather" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Feather Icon, add the following line in your
						React page:
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						npm install feather-icons --save
					</pre>
					<p className="bg-gray-200 p-2 mb-4">
						Import the statement at the top of react application
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						import * as feather from 'feather-icons';
					</pre>
					<p className="bg-gray-200 p-2 mb-4">
						To get the svg value of the icon do this
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						const userIcon = feather.icons[{icon1.split("/")[1]}];
					</pre>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						const userSvg = userIcon.toSvg();
					</pre>
					<p className="bg-gray-200 p-2 mb-4">
						Finally add this line where you wnat the icon
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						{useful}
					</pre>
				</div>
			)}

			{provider1 === "mdi" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Matrial Design Icon, add the following line
						in your React page:
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						npm install @mdi/react
					</pre>
					<h1 className="text-xl m-2">
						Import the following line above the react page{" "}
					</h1>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						import {mdiIconName} from '@mdi/react';
					</pre>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;{mdiIconName}/&gt;
					</pre>
				</div>
			)}

			{provider1 === "fluent" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the fluent Icon, add the following line in your
						React page:
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						npm install @fluentui/react-icons
					</pre>
					<h1 className="text-xl m-2">
						the following line in your react page{" "}
					</h1>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;svg viewBox=" 0 0 24 24"&gt; &lt;path d={d_value}{" "}
						/&gt; &lt;svg/&gt;
					</pre>
				</div>
			)}

			{provider1 === "bootstrap" && (
				<div className=" w-11/12 bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 select-none">
					<p className="bg-gray-200 p-2 mb-4">
						To use the Bootstrap Icon, add the following line in
						your React page:
					</p>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						npm install bootstrap-icons
					</pre>
					<h1 className="text-xl m-2">
						Import the following line above the react page{" "}
					</h1>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						import 'bootstrap-icons/font/bootstrap-icons.css';
					</pre>
					<pre className="bg-white p-4 rounded-md shadow mb-4 overflow-auto">
						&lt;i class={iconClass}&gt;&lt;/i&gt;
					</pre>
				</div>
			)}
		</>
	)
}

export default ReactComponent
