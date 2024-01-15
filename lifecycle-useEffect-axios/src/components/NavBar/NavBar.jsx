import "./NavBar.css"
import React from "react"
import { NavLink } from "react-router-dom"
function NavBar() {
	return (
		<nav className="NavBar">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/counters">Counters</NavLink>
				</li>
				<li>
					<NavLink to="/global">Global</NavLink>
				</li>
				<li>
					<NavLink to="/pokemons">Poke</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
