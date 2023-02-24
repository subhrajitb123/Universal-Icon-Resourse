import React from "react"

const ReactComponent = ({ icon1 }) => {
	const fontAwesomeImportCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'`
	return (
		<>
			<div className="bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
				<p className="bg-gray-200 p-2 mb-4">
					To use the Font Awesome icons, please Download this
					following Dependencies
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4">
					npm i --save @fortawesome/fontawesome-svg-core <br />
					npm install --save @fortawesome/free-solid-svg-icons <br />
					npm install --save @fortawesome/react-fontawesome <br />
				</pre>
				<h3 className="font-bold text-xl mb-5">
					Import this at the top of the page
				</h3>
				<p className="bg-gray-200 p-2 mb-4">
					{fontAwesomeImportCode} <br />
					import {icon1} from '@fortawesome/free-solid-svg-icons'
				</p>
				<pre className="bg-white p-4 rounded-md shadow mb-4">
					&lt;FontAwesomeIcon icon={icon1}/&gt;
				</pre>
			</div>
		</>
	)
}

export default ReactComponent
