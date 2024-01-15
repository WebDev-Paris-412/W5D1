import { useState } from "react"
import Counter from "../../components/Counter/Counter"
import Timer from "../../components/Timer/Timer"

function CountersPage() {
	const [showCounter, setShowCounter] = useState(false)
	const [showTimer, setShowTimer] = useState(false)
	return (
		<>
			<div>
				<button onClick={() => setShowCounter(!showCounter)}>
					Display counter
				</button>
			</div>

			{showCounter && <Counter />}
			<div>
				<button onClick={() => setShowTimer(!showTimer)}>Display Timer</button>
			</div>
			{showTimer && <Timer />}
		</>
	)
}

export default CountersPage
