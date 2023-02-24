import React from "react"

const HtmlComponent = ({ icon1 }) => {
	return (
		<div className="bg-gray-100 py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
			<p className="bg-gray-200 p-2 mb-4">
				To use the Font Awesome icons, add the following line inside the
				&lt;head&gt; section of your HTML page:
			</p>
			<pre className="bg-white p-4 rounded-md shadow mb-4">
				&lt;link rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/&gt;
			</pre>
			<p className="bg-gray-200 p-2 mb-4">
				To use the Font Awesome icons, add the following line inside the
				&lt;body&gt; section of your HTML page:
			</p>
			<pre className="bg-white p-4 rounded-md shadow mb-4">
				&lt;i class="{icon1}"&gt;&lt;/i&gt;
			</pre>
		</div>
	)
}

export default HtmlComponent
