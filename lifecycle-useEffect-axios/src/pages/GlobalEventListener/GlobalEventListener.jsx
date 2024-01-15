import React, { useEffect } from "react"

function GlobalEventListener() {
	function changeRootBgColor() {
		console.log("Running")
		document.documentElement.style.backgroundColor = randomColor()
	}
	function randomColor() {
		return `hsl(${Math.random() * 360}, 50%, 20%)`
	}
	useEffect(() => {
		document.addEventListener("click", changeRootBgColor)
		return () => {
			document.removeEventListener("click", changeRootBgColor)
		}
	}, [])
	return <div>GlobalEventListener</div>
}

export default GlobalEventListener
