import React from "react"

function NavigationActions({ setApiUrl, previousPage, nextPage }) {
	return (
		<div>
			<button onClick={() => setApiUrl(previousPage)} disabled={!previousPage}>
				Previous
			</button>
			<button onClick={() => setApiUrl(nextPage)} disabled={!nextPage}>
				Next
			</button>
		</div>
	)
}

export default NavigationActions
