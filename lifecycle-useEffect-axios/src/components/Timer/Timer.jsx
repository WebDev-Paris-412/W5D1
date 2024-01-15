import React, { useState, useEffect } from "react"

function Timer() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			console.log("set interval running")
			setCount((currentCount) => currentCount + 1)
		}, 1000)

		return () => {
			console.log("Removing the Timer component from the DOM.")
			clearInterval(intervalId)
		}
	}, [])

	useEffect(() => {
		console.log("timer update", count)
	}, [count])

	return (
		<div>
			<h2>Time: {count}</h2>
		</div>
	)
}

export default Timer
