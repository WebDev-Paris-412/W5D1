import React, { useState, useEffect } from "react"

function Counter() {
	//! 1 Create state
	//? Re-rendering phase triggered by a state update.
	const [count, setCount] = useState(0)

	/**
	 * useEffect takes 2 args
	 * - a callback function
	 * - an Array of dependencies
	 */

	// useEffect(() => {
	// 	/**
	// 	 * This is executed everytime a state change
	// 	 * (everytime the component is updated)
	// 	 */
	// 	console.log("Update is happening!", count)
	// })

	//! 1 Add the callback to memory (execute it after the render phase)
	//? This useEffect is not added to memory because we're re-rendering
	//? This useEffect only happen once (when component was mounted.)
	useEffect(() => {
		//! 2 console.log, this is happening after mounting only
		console.log("Component has been mounted!")
	}, [])

	//! 1 Add the callback to memory (execute it after the render phase)
	//? This useEffect is added to memory because count was modified.
	useEffect(() => {
		//! 2 console.log, this is happening after mounting and when count
		//! is modified.
		console.log("Count has been modified")
	}, [count])

	//! 1 Execute console.log
	//? Execute console.log
	console.log("rendering!!  Value of count: ", count)
	//! 1 Rendering phase, once done: execute the useEffect(s)
	//? Rendering phase, once done: execute the useEffect(s)
	return (
		<div>
			<h2>{count}</h2>
			<div>
				{/*  2 After first rendering, we click on a button. 
        A setter function is executed.
        The setter function triggers a component re-render called: 3
        */}
				<button onClick={() => setCount(count - 1)}>-</button>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
		</div>
	)
}

export default Counter
