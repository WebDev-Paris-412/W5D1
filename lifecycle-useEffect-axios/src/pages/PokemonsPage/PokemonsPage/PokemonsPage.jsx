import { useState } from "react"
const promptInitial = ["discover", "catch", "use", "ambush", "feed"]

function PokemonsPage() {
	const [prompt, setPrompt] = useState(promptInitial)

	const promptToRender = prompt[Math.floor(Math.random() * prompt.length)]
	return (
		<div
			style={{
				padding: "1rem",
			}}>
			<h2>Like Pokemon ?</h2>
			<p>
				Use our awesome Sidebar to <span>{promptToRender}</span> them all !
			</p>
		</div>
	)
}

export default PokemonsPage
