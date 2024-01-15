import { useState, useEffect } from "react"
import "./SideBar.css"
import { Link } from "react-router-dom"
import Spinner from "./../Spinner/Spinner"
import NavigationActions from "../NavigationActions/NavigationActions"

function SideBar() {
	const [apiUrl, setApiUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=10"
	)
	const [nextPage, setNextPage] = useState(null)
	const [previousPage, setPreviousPage] = useState(null)
	/**
	 * Need to make an internet request?
	 * -> fetch or axios
	 * Want to be able to map over a list of elements
	 * -> store this information somewhere (in a state !)
	 *
	 * If you need to do an internet request -> useEffect
	 *
	 */

	const [pokemons, setPokemons] = useState(null)

	useEffect(() => {
		fetch(apiUrl)
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("SideBar: ", response)
				setPokemons(response.results)
				setNextPage(response.next)
				setPreviousPage(response.previous)
			})
			.catch((e) => console.error(e))
	}, [apiUrl])

	if (!pokemons) {
		return (
			<aside className="SideBar">
				<Spinner />
			</aside>
		)
	}
	console.log(nextPage, previousPage)
	return (
		<aside className="SideBar">
			{pokemons.map((onePoke) => {
				return (
					<Link key={onePoke.name} to={`/pokemons/${onePoke.name}`}>
						{onePoke.name}
					</Link>
				)
			})}
			<NavigationActions
				setApiUrl={setApiUrl}
				previousPage={previousPage}
				nextPage={nextPage}
			/>
		</aside>
	)
}

export default SideBar
